import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#C40C0C',
    alignItems: 'center',
  },

  //--------------------------
  header: {
    width: windowWidth,
    height: windowHeight * 0.075,
    backgroundColor: '#153448',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.05,
  },
  headerText: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  body: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.9,
    alignItems: 'center',
    marginTop: windowHeight * 0.01,
    paddingVertical: windowHeight * 0.01,
  },

  //--------------------------
  button: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.06,
    backgroundColor: '#153448',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.03,
  },

  buttonText: {
    color: 'white',
    fontSize: windowWidth * 0.045,
    fontWeight: '500',
  },

  text: {
    color: 'white',
    fontSize: windowWidth * 0.05,
    fontWeight: '500',
    textTransform: 'capitalize',
    paddingBottom: windowHeight * 0.01,
  },
});
