import {getWeather, getPharmacy, getNamaz} from '../NetworkUrl';
import {get} from '../main';

const getWeatherApi = body => {
  const weatherUrl = getWeather + body;
  return get(weatherUrl);
};

const getPharmacyApi = body => {
  const pharmacyUrl = getPharmacy + body;
  return get(pharmacyUrl);
};

const getNamazApi = body => {
  const namazUrl = getNamaz + body;
  return get(namazUrl);
};

export {getWeatherApi, getPharmacyApi, getNamazApi};
