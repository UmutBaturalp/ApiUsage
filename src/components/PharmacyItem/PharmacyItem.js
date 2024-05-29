import {StyleSheet, Text, View, Dimensions, StatusBar} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

const PharmacyItem = props => {
  const {item} = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.cardTop}>
        <Text style={styles.cardTopText}>{item?.name} Eczanesi</Text>
      </View>
      <View style={styles.cardMiddle}>
        <Text style={styles.cardMiddleText}>{item?.address}</Text>
      </View>
      <View style={styles.cardBottom}>
        <Text style={styles.cardBottomText}>{item?.dist}</Text>
        <Text style={styles.cardBottomText}>{item?.phone}</Text>
      </View>
    </View>
  );
};

export default PharmacyItem;

const styles = StyleSheet.create({
  wrapper: {
    width: windowWidth * 0.8,
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.04,
    marginVertical: windowHeight * 0.015,
    paddingVertical: windowHeight * 0.005,
  },
  cardTop: {
    width: '100%',
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.005,
  },
  cardMiddle: {
    width: '100%',
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.005,
  },
  cardBottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.005,
  },

  //--------------------------
  cardTopText: {
    color: 'black',
    fontSize: windowWidth * 0.045,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  cardMiddleText: {
    color: 'black',
    fontSize: windowWidth * 0.04,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  cardBottomText: {
    color: 'black',
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});
