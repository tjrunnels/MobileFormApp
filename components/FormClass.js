import React, { Component } from 'react';
import { View, StyleSheet, Button,TouchableOpacity, Text } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

import styles from '../allStyles';

import { sendEmail } from './emailSender';




const Form = t.form.Form;

const installations_radio = t.enums({
  Propane_Tanks: 'Propane Tanks',
  Gas_Fireplaces_etc: 'Gas Fireplaces, etc.',
  Water_Heaters: 'Water Heaters',
  Propane_Furnaces: 'Propane Furnaces',
  Propane_Generators: 'Propane Generators'
});

const User = t.struct({
  name: t.String,
  email: t.String,
  phone: t.String,
  address: t.maybe(t.String),
  radio: t.maybe(installations_radio),
  company: t.maybe(t.String),
});

  
export default class FormClass extends Component {




handleSubmit = () => {
    var field_values = this._form.getValue(); // use that ref to get the form value
    
    if(field_values == null)
      return 0;

    var savedValues = {
      name: "null",
      email: "null",
      phone: "null",
      address: "null",
      radio: "null",
      company: "null",
    };


    //saving the values

    //these are kinda pointless but lets keep it organized
    if(field_values.name) {savedValues.name = field_values.name; }
    if(field_values.email) {savedValues.email = field_values.email; }
    if(field_values.phone) {savedValues.phone = field_values.phone; }

    var email_body = 
      "Name: " + savedValues.name + "\n" + 
      "Email: " + savedValues.email + "\n" + 
      "Phone Number: " + savedValues.phone + "\n";

    //tomdo: comment out these logs
    if(field_values.address != "") {console.log('address: ', field_values.address) }
    if(field_values.address) {
      savedValues.address = field_values.address;
      email_body += "Address: " + savedValues.address + "\n"; 
    }

    if(field_values.radio) {console.log('radio: ', field_values.radio) }
    if(field_values.radio) {
      savedValues.radio = field_values.radio;
      email_body += "Propane Installation I'm intersted in: " + savedValues.radio + "\n"; 
    }

    if(field_values.company) {console.log('company: ', field_values.company) }
    if(field_values.company){
      savedValues.company = field_values.company;
      email_body += "Company: " + savedValues.company + "\n"; 
    }

    var email_formName = global.Gwood.forms[global.Gwood.formChosen];

    //sendEmail(to, subject, body, options = {}) {
    sendEmail(
      'supertom500@gmail.com',
      "APP: " + email_formName + " - " + savedValues.name,
      email_body
    ).then(() => {
      console.log('Our email successful provided to device mail ');
    });

    }

      
  render() {
    var _fieldsNeeded = this.props.formsNeeded;
    var _options = {
        fields: {
            name: {
                hidden: _fieldsNeeded[0] == "N" ? true : false // <= label for the name field
            },
            email: {
                hidden: _fieldsNeeded[1] == "N" ? true : false
            },
            phone: {
                hidden: _fieldsNeeded[2] == "N" ? true : false
            },
            address: {
                hidden: _fieldsNeeded[3] == "N" ? true : false // <= label for the name field
            },
            radio: {
                hidden: _fieldsNeeded[4] == "N" ? true : false
            },
            company: {
                hidden: _fieldsNeeded[5] == "N" ? true : false
            },
        }
      };
    return (
        <View style={styles.formClass_container}>
          <Form 
            ref={c => this._form = c} // assign a ref
            type={User} 
            options={_options}
          />
          <TouchableOpacity onPress={this.handleSubmit} style={styles.formClass_submitButton}>
            <Text style={styles.formClass_submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      );
  }
}