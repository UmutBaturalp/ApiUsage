import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import dataa from '../../assets/Contans/dataa';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

const CityModal = props => {

  const {isVisible, modalFunc, selected, setSelected, metot} = props;
  return (
    <Modal visible={isVisible} transparent={true} onRequestClose={modalFunc}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.wrapperTop}>
            <TouchableOpacity onPress={modalFunc}>
              <Text style={styles.close}>x</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.selectSection}>
            <Text style={styles.headerText}>Şehir Seçiniz</Text>
            <SelectList
              data={dataa}
              placeholder="Adana"
              boxStyles={{
                width: windowWidth * 0.7,
                borderWidth: 2,
                borderColor: 'black',
              }}
              dropdownTextStyles={{
                color: 'black',
                fontSize: windowWidth * 0.03,
                textTransform: 'capitalize',
              }}
              searchPlaceholder="Search..."
              dropdownStyles={{
                width: windowWidth * 0.7,
                backgroundColor: 'white',
                height: windowWidth * 0.25,
              }}
              setSelected={val => setSelected(val)}
              save="value"
              search={true}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => {
              metot();
              modalFunc();
            }}>
            <Text style={styles.buttonText}>Onayla</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CityModal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: windowWidth * 0.85,
    height: windowWidth * 0.6,
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.04,
    alignItems: 'center',
    paddingVertical: windowHeight * 0.02,
  },
  headerText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
    color: 'black',
    marginVertical: windowHeight * 0.01,
  },
  wrapperTop: {
    width: windowWidth * 0.7,
    height: '10%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  close: {
    fontSize: windowWidth * 0.05,
    fontWeight: '400',
    color: 'red',
  },
  button: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.06,
    backgroundColor: '#153448',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.03,
    marginVertical: windowWidth * 0.04,
  },
  buttonText: {
    color: 'white',
    fontSize: windowWidth * 0.045,
    fontWeight: '500',
  },
});
