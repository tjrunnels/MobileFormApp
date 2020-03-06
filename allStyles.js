import { Image, Platform, StyleSheet, Dimensions} from 'react-native';


var glenwoodRed = '#e21f26';
var glenwoodFont = 'Montserrat';
var glenwoodFontBold = 'Montserrat-Bold';
var glenwoodBackground = require('./assets/images/mobileappbackground.jpeg');

export default function styles(){
    return styles;
}

styles = StyleSheet.create({
 
  app_container: {
    flex: 1,
    backgroundColor: 'black',
  },

  app_backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },

  navigatorStyle: {
    backgroundColor: glenwoodRed,
  },



////////////////////////////////////////////////// FormHeader
  formHeader_rectangle: {
    width: "auto",
    height: "auto",
    backgroundColor: glenwoodRed,
    alignSelf: 'flex-start',
  },

  formHeader_text: {
    fontSize:25,
    fontFamily: glenwoodFontBold,
    padding: 10,
    paddingRight: 25,
    paddingLeft: 20,
    color:"white",
  },

/////////////////////////////////////////////////// FormClass

  formStyle: {
    color: "white",
  },
  formClass_container: {
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'transparent',
    color: "white",
    },

  formClass_submitButton:{
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor:'#68a0cf',
    borderColor: '#fff',
    width: 300
  },

  formClass_submitButtonText: {
     fontSize:20,
     fontWeight:"bold",
     textAlign:"center",
     fontFamily: glenwoodFont,
   },

////////////////////////////////////////////////// Home page
home_container: {
  flex: 1,
},
home_contentContainer: {
  paddingTop: 20,
},
home_welcomeContainer: {
  alignItems: 'center',
  marginBottom: 30,
},
home_welcomeText: {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 15,
  fontSize: 27,
  color: 'white',
  lineHeight: 24,
  textAlign: 'center',
  fontFamily: glenwoodFontBold,
},
home_paragraph: {
  fontSize: 18,
  color: 'white',
  lineHeight: 24,
  textAlign: 'center',
  fontFamily: glenwoodFont,
},

home_getStartedContainer: {
  alignItems: 'center',
  marginHorizontal: 50,
},

home_helpContainer: {
  marginTop: 15,
  alignItems: 'center',
},
home_helpLink: {
  paddingVertical: 15,
},
home_helpLinkText: {
  fontSize: 14,
  color: '#2e78b7',
},

  //////////////// form button
 
home_formButton:{
  alignSelf: "center",
  // marginRight:40,
  // marginLeft:40,
  marginTop:10,
  paddingTop:20,
  paddingBottom:20,
  borderRadius:10,
  borderWidth: 1,
  backgroundColor: glenwoodRed,
  borderColor: 'rgba(0, 0, 0, 0)',
  width: Dimensions.get('window').width * .85, 
},

home_formButtonText: {
   fontSize:20,
   textAlign:"center",
   fontFamily: glenwoodFontBold,
   color: "white",
 },


//////////////////////////////////////////////////     Form page
  form_container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  form_contentContainer: {
    paddingTop: 15,
  },
  form_optionIconContainer: {
    marginRight: 12,
  },
  form_option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  form_lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  form_optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  form_getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },



  //////////////////////////////////////////////// About Page
  about_container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  about_mapImage: {
    width: Dimensions.get('window').width,           
    height:210,
  },
  about_mapContainer: {
    backgroundColor: "black",
    textAlign: "center",
    padding:7,
  },
  about_hoursContainer: {
    backgroundColor: "black",
    textAlign: "center",
    paddingBottom:15,
  },
  about_phoneContainer: {
    backgroundColor: glenwoodRed,
    textAlign: "center",
  },
  about_hourText: {
    color: "white",
    fontFamily: glenwoodFontBold,
    fontSize: 28,
    alignSelf: 'flex-start',
    marginTop: 1,
    alignSelf: "center",
    padding:10,
    paddingTop:15,
  },
  about_phoneText: {
    color: "white",
    fontFamily: glenwoodFontBold,
    fontSize: 25,
    alignSelf: 'flex-start',
    marginTop: 1,
    alignSelf: "center",
    padding:10,
    paddingBottom:40,
  },
  about_mapText: {
    color: "white",
    fontFamily: glenwoodFontBold,
    fontSize: 17,
    alignSelf: 'flex-start',
    marginTop: 1,
    alignSelf: "center",
    padding:10,
  },
  about_paragraphText: {
    color: "white",
    fontFamily: glenwoodFont,
    fontSize: 17,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  about_contentContainer: {
    padding: 15,
    backgroundColor: glenwoodRed,
  },
  about_optionIconContainer: {
    marginRight: 12,
  },
  about_option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  about_lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  about_optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },




});
