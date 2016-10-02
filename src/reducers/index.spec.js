import reducer from './index'

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      images: []
    })
  })

  it('should handle RECEIVE_TWEETS', () => {
    expect(
      reducer({}, {
        type: 'RECEIVE_TWEETS',
        images: ['http://pbs.twimg.com/media/CtUbYpuW8AA2Yx6.jpg']
      })
    ).toEqual({
      images: ['http://pbs.twimg.com/media/CtUbYpuW8AA2Yx6.jpg']
    })

    expect(
      reducer(
        {
          images: ['http://pbs.twimg.com/media/CtUbYpuW8AA2Yx6.jpg']
        },
        {
          type: 'RECEIVE_TWEETS',
          images: ['http://pbs.twimg.com/media/CtURM1vUkAABg_k.jpg']
        }
      )
    ).toEqual(
      {
        images: ['http://pbs.twimg.com/media/CtURM1vUkAABg_k.jpg']
      }
    )
  })
})
