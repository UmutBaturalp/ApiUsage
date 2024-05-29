import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
import React, {useEffect} from 'react';
import PharmacyItem from '../PharmacyItem/PharmacyItem';
const PharmacyList = props => {
  const {data} = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <PharmacyItem item={item} />}
      />
    </View>
  );
};

export default PharmacyList;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.81,
    alignItems: 'center',
  },
});
