import {View, SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {CityModal} from '../../components';
import {getWeatherApi} from '../../service';
const WeatherScreen = props => {
  const {navigation} = props;
  const [selected, setSelected] = React.useState('adana');
  const [counrty, setcounrty] = useState('tr');
  const urlSend = `?data.lang=${counrty}&data.city=${selected}`;
  const metot = () => {
    getWeatherApi(urlSend).then(res => {
      console.log(res);
      setweatherData(res.result);
      console.log('weatherData', weatherData[0]);
    });
  };

  //modal
  const [modalVisible, setModalVisible] = useState(false);
  const modalFunc = () => {
    setModalVisible(!modalVisible);
  };

  const [weatherData, setweatherData] = useState([]);
  console.log('weatherData : ', weatherData);

  const [dayCounter, setdayCounter] = useState(0);

  const backDay = () => {
    dayCounter === 0
      ? setdayCounter(weatherData.length - 1)
      : setdayCounter(dayCounter - 1);
  };
  const nextDay = () => {
    dayCounter === weatherData.length - 1
      ? setdayCounter(0)
      : setdayCounter(dayCounter + 1);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.changeDateView}>
            <TouchableOpacity
              disabled={dayCounter === 0 ? true : false}
              style={[
                styles.changeDateButton,
                {opacity: dayCounter === 0 ? 0.5 : 1},
              ]}
              onPress={backDay}>
              <Text style={styles.changeDateText}> Geri </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.changeDateButton} onPress={nextDay}>
              <Text style={styles.changeDateText}>Ileri</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.image}
            source={{uri: weatherData[dayCounter]?.icon}}
          />
          <View style={styles.info}>
            <Text style={styles.cityText}>{selected}</Text>
            <Text style={styles.degreeText}>
              {weatherData[dayCounter]?.degree} °C
            </Text>
          </View>
          <Text style={styles.infoText}>
            {weatherData[dayCounter]?.description}
          </Text>
          <Text style={styles.infoText}>
            Nem : %{weatherData[dayCounter]?.humidity}
          </Text>
          <View style={styles.maxMinView}>
            <Text style={styles.infoText}>
              Max : {weatherData[dayCounter]?.max}
            </Text>
            <Text style={styles.infoText}>
              Min : {weatherData[dayCounter]?.min}
            </Text>
          </View>
          <Text style={styles.infoText}>
            Gece : {weatherData[dayCounter]?.night}
          </Text>
          <View style={styles.buttonsSection}>
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

export default WeatherScreen;

/* 
 <View style={styles.selectSection}>
            <Text style={styles.selectText}>Şehir Seçiniz</Text>
            <SelectList
              boxStyles={{
                width: windowWidth * 0.8,
                borderWidth: 2,
                borderColor: 'black',
              }}
              dropdownTextStyles={{
                color: 'black',
                fontSize: windowWidth * 0.03,
                textTransform: 'capitalize',
              }}
              placeholder="Adana"

              searchPlaceholder="Ara..."
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
*/
