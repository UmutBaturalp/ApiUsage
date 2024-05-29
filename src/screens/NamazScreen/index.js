import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {CityModal} from '../../components';
import {getNamazApi} from '../../service';
const Home = props => {
  const {navigation} = props;
  const [selected, setSelected] = React.useState('adana');

  //api
  const urlSend = `?data.city=${selected}`;
  const [namazData, setnamazData] = useState([]);

  const metot = () => {
    getNamazApi(urlSend).then(res => {
      console.log(res);
      setnamazData(res.result);
      console.log('namazData', namazData[0]);
    });
  };

  //apiEnd

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
          <View style={styles.info}>
            <View style={styles.cityName}>
              <Text style={styles.cityText}>{selected}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoText}>{namazData[0]?.vakit}</Text>
              <Text style={styles.infoText}>{namazData[0]?.saat}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoText}>{namazData[1]?.vakit}</Text>
              <Text style={styles.infoText}>{namazData[1]?.saat}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoText}>{namazData[2]?.vakit}</Text>
              <Text style={styles.infoText}>{namazData[2]?.saat}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoText}>{namazData[3]?.vakit}</Text>
              <Text style={styles.infoText}>{namazData[3]?.saat}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoText}>{namazData[4]?.vakit}</Text>
              <Text style={styles.infoText}>{namazData[4]?.saat}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoText}>{namazData[5]?.vakit}</Text>
              <Text style={styles.infoText}>{namazData[5]?.saat}</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={modalFunc}>
              <Text style={styles.buttonText}>Şehir Değiştir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <CityModal
        isVisible={modalVisible}
        modalFunc={modalFunc}
        setSelected={setSelected}
        selected={selected}
        metot={metot}
      />
    </SafeAreaView>
  );
};

export default Home;
