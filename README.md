# Twitter Image Slider

Search twitter images by hashtag using the Twitter API

Click [here](https://twitter-image-slider.herokuapp.com/) to run the application

## Run Locally

### Build and Start Server

```sh
git clone git@github.com:stacyhuang/twitter-image-slider.git
cd twitter-image-slider

npm run build
npm run start
```

Your application should now be running on [localhost:8000](http://localhost:8000/).


### Twitter API Authentication
To issue authenticated requests using Twitter's Applicaton-only authentication, you will need to fetch a bearer token from Twitter as documented [here](https://dev.twitter.com/oauth/application-only). 

Create a `.env` file in the root directory and add your Twitter credentials (consumer key + consumer secret + bearer token) accordingly in the form of `NAME=VALUE`.

For example:

```
TWITTER_CONSUMER_KEY='xvz1evFS4wEEPTGEFPHBog'
TWITTER_CONSUMER_SECRET='L8qq9PZyRg6ieKGEKhZolGC0vJWLw8iEJ88DRdyOg'
TWITTER_BEARER_TOKEN='eHZ6MWV2RlM0d0VFUFRHRUZQSEJvZzpMOHFxOVBaeVJnNmllS0dFS2hab2xHQzB2SldMdzhpRUo4OERSZHlPZw'
```

## Run Tests

```sh
npm run test
```
