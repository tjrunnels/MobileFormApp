import { Image, Platform, StyleSheet} from 'react-native';

export default function styles(){
    return styles;
}

styles = StyleSheet.create({


/////////////////////////////////// Home page
  home_container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  home_developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  home_contentContainer: {
    paddingTop: 30,
  },
  home_welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  home_welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  home_getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  home_homeScreenFilename: {
    marginVertical: 7,
  },
  home_codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  home_codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  home_getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  home_tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  home_tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  home_navigationFilename: {
    marginTop: 5,
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
  home_formButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor:'#68a0cf',
    borderColor: '#fff',
     width: 300
  },

  home_formButtonText: {
     fontSize:20,
     fontWeight:"bold",
     textAlign:"center",
     fontFamily:"Times New Roman",
   },


//////////////////////////////////////     Form page
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






});
