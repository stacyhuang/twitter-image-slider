import { Router } from 'express';
import fetch from 'node-fetch';

const router = new Router();

router.get('/token', (req, res) => {
  const API_ENDPOINT = `https://api.twitter.com/oauth2/token`;
  const CONSUMER_KEY = 'h6ct62L8CW9cfje7CqIZzElOR';
  const CONSUMER_SECRET = '9CjUkj6FokMDOSFVwJgmcRFwmvjokw4yXsR4T5jk7aQ3dxaoIN';
  const CREDENTIALS = CONSUMER_KEY + ':' + CONSUMER_SECRET
  const CREDENTIALS_ENCODED = new Buffer(CREDENTIALS).toString('base64');

  fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': 'Basic ' + CREDENTIALS_ENCODED
    },
    body: 'grant_type=client_credentials'
  })
  .then((res) => {
    return res.json();
  }).then((json) => {
    if (json.token_type === 'bearer') {
      return json.access_token;
    }
  })
  .catch((err) => {
    console.log(err);
  })
});

router.get('/search', (req, res) => {
  const API_ENDPOINT = 'https://api.twitter.com/1.1/search/tweets.json?q=%23everlane&include_entities=true&filter=images';
  const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAP2XxAAAAAAAovSobnvhXnNIQ%2BwZjT6dO8i3%2BnQ%3DtHwcxUReovrEkovdDvOWkUm1ZqsRzYM887N2GtvMV97c989X5f';

  fetch(API_ENDPOINT, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + BEARER_TOKEN
    }
  })
  .then((res) => {
    return res.json();
  }).then((json) => {
    res.send(json);
  })
  .catch((err) => {
    console.log(err);
  })
})

export default router;
