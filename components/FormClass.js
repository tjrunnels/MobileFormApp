import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

var User = t.struct({
  name: t.String,
  email: t.String,
  phone: t.String,
  address: t.maybe(t.String),
  radio: t.maybe(t.String),
  company: t.maybe(t.String),

});


  
export default class FormClass extends Component {


handleSubmit = () => {
     var value = this._form.getValue(); // use that ref to get the form value
    if(value.address) {console.log('value: ', value.address) }
   // console.log('value: ', value);
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
        <View style={styles.container}>
          <Form 
            ref={c => this._form = c} // assign a ref
            type={User} 
            options={_options}
          />
          <Button
            title="Sign Up!"
            onPress={this.handleSubmit}
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});