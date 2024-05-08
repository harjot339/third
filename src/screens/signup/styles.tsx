import {Dimensions, StyleSheet} from 'react-native';
const dim = Dimensions.get('window');
const style = StyleSheet.create({
  mainSafeView: {flex: 1, backgroundColor: 'rgb(51,50,56)'},
  main: {
    flex: 1,
    marginHorizontal: 30,
    justifyContent: 'center',
    marginTop: 10,
    paddingBottom: 10,
  },

  text: {fontSize: 16, fontWeight: 'bold', color: 'white'},
  button: {
    backgroundColor: '#3bc68b',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dob: {
    borderWidth: 2,
    borderRadius: 20,
    height: 60,
    marginBottom: 10,
    marginTop: 5,
    borderColor: '#4f4f53',
  },
  dobText: {
    marginTop: 9,
    paddingLeft: 20,
    color: 'white',
  },
  dobPlaceholder: {
    color: '#5d5e67',
    height: 35,
    marginTop: 9,
    paddingLeft: 20,
  },
  error: {
    color: 'rgb(255,51,51)',
    fontSize: 12,
    paddingLeft: 12,
    marginTop: -5,
    marginBottom: 10,
  },

  image: {borderRadius: 100, alignSelf: 'center', width: 100, height: 100},
  imageButton: {
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  titleText: {alignSelf: 'center', fontSize: 18, marginBottom: 15},
  bottomSheet: {
    width: dim.width,
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'rgb(51,50,56)',
    position: 'absolute',
    bottom: 0,
    shadowColor: 'grey',
    paddingVertical: 20,
    paddingHorizontal: 30,
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    columnGap: 25,
    alignItems: 'center',
  },
  sheetButton: {
    backgroundColor: 'white',
    width: 150,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
export const phoneInputStyle = StyleSheet.create({
  container: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#4f4f53',
    backgroundColor: 'rgb(51,50,56)',
    height: 60,
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    
  },
  textContainerStyle: {
    backgroundColor: 'rgb(51,50,56)',
    borderRadius: 30,
  },
  codeTextStyle: {
    color: 'white',
    height: 20,
  },
  textInputStyle: {
    color: 'white',
    height: 40,
  },
});

export default style;
