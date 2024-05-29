import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {getPharmacyApi} from '../../service';
import {PharmacyItem, PharmacyList, CityModalCopy} from '../../components';
const PharmacyScreen = () => {
  const [selected, setSelected] = React.useState('Adana');
  const urlSend = `?il=${selected}`;
  const [pharmacyData, setpharmacyData] = useState([]);
  const metot = () => {
    getPharmacyApi(urlSend).then(res => {
      console.log(res);
      setpharmacyData(res.result);
      console.log('pharmacyData', pharmacyData);
    });
  };

  /* useEffect(() => {
    metot();
  }, [selected]); */

  //modal
  const [modalVisible, setModalVisible] = useState(false);
  const modalFunc = () => {
    setModalVisible(!modalVisible);
  };
  //modalEnd
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.body}>
          <View>
            <Text style={styles.text}>{selected}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={modalFunc}>
            <Text style={styles.buttonText}>Şehir Değiştir</Text>
          </TouchableOpacity>
          {pharmacyData && <PharmacyList data={pharmacyData} />}
        </View>
      </View>
      <CityModalCopy
        isVisible={modalVisible}
        modalFunc={modalFunc}
        setSelected={setSelected}
        selected={selected}
        metot={metot}
      />
    </SafeAreaView>
  );
};

export default PharmacyScreen;
