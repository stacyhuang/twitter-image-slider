import { Router } from 'express';
import Twitter from 'twitter';

const router = new Router();

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});

router.get('/search', (req, res) => {
  client.get('https://api.twitter.com/1.1/search/tweets.json', {q: '#everlane filter:images'}, (error, tweets, response) => {
    res.send(tweets);
  });
});

export default router;
