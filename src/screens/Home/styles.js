import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

/// #DFD0B8 acık
/// #948979 krem
/// #3C5B6F orta
/// #153448 koyu

export default styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#DFD0B8',
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
    fontSize: windowWidth * 0.05,
  },

  ///--------------------------
  body: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.8,
    backgroundColor: '#DFD0B8',
    marginTop: windowHeight * 0.02,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 5,
    alignItems: 'center',
  },

  selectSection: {
    width: windowWidth * 0.9,
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.01,
    rowGap: windowWidth * 0.02,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },

  selectTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  selectText: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    marginTop: windowHeight * 0.01,
    fontWeight: 'bold',
    paddingLeft: windowWidth * 0.01,
  },

  //--------------------------
  card: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.2,
    borderRadius: windowWidth * 0.04,
    backgroundColor: '#3C5B6F',
    marginVertical: windowWidth * 0.02,
    padding: windowWidth * 0.03,
    flexDirection: 'row',
  },
  cardImage: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
  },
  cardInfo: {paddingHorizontal: windowWidth * 0.03},
  cardInfoText: {
    color: 'white',
    fontSize: windowWidth * 0.045,
    fontWeight: '400',
    textTransform: 'capitalize',
  },

  cardCityText: {
    color: 'white',
    fontSize: windowWidth * 0.05,
    fontWeight: '400',
    textTransform: 'capitalize',
  },

  cardLeft: {
    alignItems: 'center',
    width: '30%',
    height: '100%',
    justifyContent: 'space-around',
  },
  cardRight: {
    width: '70%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingHorizontal: windowWidth * 0.03,
  },

  //--------------------------
  cardPharmacy: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.2,
    borderRadius: windowWidth * 0.04,
    backgroundColor: '#C40C0C',
    marginVertical: windowWidth * 0.02,
    padding: windowWidth * 0.03,
    justifyContent: 'space-around',
  },
  cardPharmacyTop: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPharmacyText: {
    color: 'white',
    fontSize: windowWidth * 0.042,
    fontWeight: '400',
    textTransform: 'capitalize',
  },

  cardPharmacyBottom: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },

  //--------------------------

  namazCard: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.2,
    borderRadius: windowWidth * 0.04,
    backgroundColor: '#799351',
    marginVertical: windowWidth * 0.02,
    padding: windowWidth * 0.03,
    alignItems: 'center',
  },
  namazCardTop: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: windowWidth * 0.01,
  },
  namazCardContent: {
    flexDirection: 'row',
  },
  namazCardText: {
    color: 'white',
    fontSize: windowWidth * 0.05,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  namazCardContentLeft: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
  },
  namazCardContentRight: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
  },
});
