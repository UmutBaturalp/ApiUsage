import {getPharmacy} from '../NetworkUrl';
import {get} from '../main';

const getPharmacyApi = body => {
  const pharmacyUrl = getPharmacy + body;
  return get(pharmacyUrl);
};

export {getPharmacyApi};
