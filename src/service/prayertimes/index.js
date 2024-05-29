import {getNamaz} from '../NetworkUrl';
import {get} from '../main';

const getNamazApi = body => {
  const namazUrl = getNamaz + body;
  return get(namazUrl);
};

export {getNamazApi};
