import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './index'
import * as types from '../constants/ActionTypes'


describe('async actions', () => {
  const middlewares = [ thunk ]
  const mockStore = configureMockStore(middlewares)

  afterEach(() => {
    fetchMock.restore()
  })

  it('creates RECEIVE_TWEETS when fetching tweets has been done', () => {
    const images = [
      'http://pbs.twimg.com/media/CtobOwwWgAAzAze.jpg'
    ]
    const response = {
      'statuses': [{
        'entities': {
          'media': [{
            'media_url': 'http://pbs.twimg.com/media/CtobOwwWgAAzAze.jpg'
          }]
        }
      }]
    }

    fetchMock.mock('/api/search?searchTerm=%23everlane', response)

    const expectedActions = [{ type: 'RECEIVE_TWEETS', images }]
    const store = mockStore({ images: [] })

    return store.dispatch(actions.fetchTweets('#everlane'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})

describe('actions', () => {
  it('should create an action to receive tweets', () => {
    const images = [
      'http://pbs.twimg.com/media/CtUbYpuW8AA2Yx6.jpg',
      'http://pbs.twimg.com/media/CtURM1vUkAABg_k.jpg',
      'http://pbs.twimg.com/media/Cs0lwwhXgAA51ZW.jpg'
    ]
    const expectedAction = {
      type: types.RECEIVE_TWEETS,
      images
    }
    
    expect(actions.receiveTweets(images)).toEqual(expectedAction)
  })
})
