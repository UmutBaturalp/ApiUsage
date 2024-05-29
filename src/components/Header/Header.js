import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';

const Header = props => {
  const {metot} = props;
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
        <TouchableOpacity onPress={metot}>
          <Text>Göster  başlık </Text>
        </TouchableOpacity>
        <Text style={styles.headerText}></Text>
      </View>
    </View>
  );
};

export default Header;
