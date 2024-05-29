import {BaseUrl} from './NetworkUrl';

const get = urlOption => {
  return fetch(BaseUrl + urlOption, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'apikey 7s0cxsgzv8n92uBkaGY9Q4:1w7EahAbtclox8vn7CvxnB',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.log('ERROR : ', error);
      throw error;
    });
};

export {get};
