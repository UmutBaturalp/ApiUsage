import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
const Wheather = props => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>SEARCH SCREEN</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{color: 'blue', marginTop: 20}}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Wheather;
