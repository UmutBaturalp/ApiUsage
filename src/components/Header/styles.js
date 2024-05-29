import {StyleSheet, Text, View, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
export default styles = StyleSheet.create({
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
    fontSize: windowWidth * 0.05,
  },
});
