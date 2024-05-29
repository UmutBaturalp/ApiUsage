import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {SelectList} from 'react-native-dropdown-select-list';
import data from '../../assets/Contans/data';
import {getWeatherApi, getPharmacyApi, getNamazApi} from '../../service';
const windowWidth = Dimensions.get('window').width;
const Home = props => {
  const {navigation} = props;
  const cities = data;
  const [selected, setSelected] = React.useState('adana');
  const [counrty, setcounrty] = useState('tr');
  const urlSend = `?data.lang=${counrty}&data.city=${selected}`;
  const urlSendPharmacy = `?il=${selected}`;
  const urlSendNamaz = `?data.city=${selected}`;

  // eczane döngüsü
  const [counterPharmacy, setcounterPharmacy] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setcounterPharmacy(counterPharmacy + 1) % pharmacyData.length;
    }, 2000);
  }, [counterPharmacy]);

  
  // eczane döngüsü biitş

  const [weatherData, setweatherData] = useState([]);
  const [pharmacyData, setpharmacyData] = useState([]);
  const [namazData, setnamazData] = useState([]);

  const metot = () => {
    getWeatherApi(urlSend).then(res => {
      console.log(res);
      setweatherData(res.result);
      console.log('weatherData', weatherData[0]);
    });
    getPharmacyApi(urlSendPharmacy).then(res => {
      console.log(res);
      setpharmacyData(res.result);
      console.log('pharmacyData', pharmacyData[0]);
    });
    getNamazApi(urlSendNamaz).then(res => {
      console.log(res);
      setnamazData(res.result);
      console.log('namazData', namazData[0]);
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.selectSection}>
            <View style={styles.selectTop}>
              <Text style={styles.selectText}>Şehir Seçiniz</Text>
              <TouchableOpacity onPress={metot}>
                <Text>Göster</Text>
              </TouchableOpacity>
            </View>

            <SelectList
              boxStyles={{width: windowWidth * 0.8}}
              dropdownTextStyles={{
                color: 'black',
                fontSize: windowWidth * 0.03,
                textTransform: 'capitalize',
              }}
              placeholder="Adana"
              dropdownStyles={{
                width: windowWidth * 0.8,
                backgroundColor: 'white',
                height: windowWidth * 0.3,
              }}
              setSelected={val => setSelected(val)}
              data={cities}
              save="value"
            />
          </View>

          {
            // **** WEATHER *****
          }
          <View style={styles.card}>
            <View style={styles.cardLeft}>
              <Image
                source={{uri: weatherData[0]?.icon}}
                style={styles.cardImage}
              />
              <Text style={styles.cardCityText}>{selected}</Text>
            </View>
            <View style={styles.cardRight}>
              <Text style={styles.cardInfoText}>
                {weatherData[0]?.description}
              </Text>
              <Text style={styles.cardInfoText}>
                Derece : {weatherData[0]?.degree}
              </Text>
              <View style={styles.maxMinView}>
                <Text style={styles.cardInfoText}>
                  Max : {weatherData[0]?.max}
                </Text>
                <Text style={styles.cardInfoText}>
                  Min : {weatherData[0]?.min}
                </Text>
              </View>
            </View>
          </View>
          {
            // **** PHARMACY *****
          }
          <View style={styles.cardPharmacy}>
            <View style={styles.cardPharmacyTop}>
              <Text style={styles.cardPharmacyText}>
                {pharmacyData[counterPharmacy]?.name} Eczanesi
              </Text>
              <Text style={styles.cardPharmacyText}>
                {pharmacyData[counterPharmacy]?.dist}
              </Text>
            </View>
            <Text style={styles.cardPharmacyText}>
              {pharmacyData[counterPharmacy]?.address}
            </Text>
            <View style={styles.cardPharmacyBottom}>
              <Text style={styles.cardPharmacyText}>
                {pharmacyData[counterPharmacy]?.phone}
              </Text>
            </View>
          </View>

          {/* **** NAMAZ *****/}
          <View style={styles.namazCard}>
            <View style={styles.namazCardTop}>
              <Text style={styles.namazCardText}>{selected}</Text>
            </View>
            <View style={styles.namazCardContent}>
              <View style={styles.namazCardContentLeft}>
                <Text style={styles.namazCardText}>
                  {namazData[0]?.vakit} - {namazData[0]?.saat}
                </Text>
                <Text style={styles.namazCardText}>
                  {namazData[1]?.vakit} - {namazData[1]?.saat}
                </Text>
                <Text style={styles.namazCardText}>
                  {namazData[2]?.vakit} - {namazData[2]?.saat}
                </Text>
              </View>
              <View style={styles.namazCardContentRight}>
                <Text style={styles.namazCardText}>
                  {namazData[3]?.vakit} - {namazData[3]?.saat}
                </Text>
                <Text style={styles.namazCardText}>
                  {namazData[4]?.vakit} - {namazData[4]?.saat}
                </Text>
                <Text style={styles.namazCardText}>
                  {namazData[5]?.vakit} - {namazData[5]?.saat}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
