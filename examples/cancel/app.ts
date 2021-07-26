import axios, { Canceler } from '../../src/index'

let CancelToken = axios.CancelToken

let source= CancelToken.source();

axios({
  url: '/cancel/get',
  method: 'get',
  cancelToken: source.token
}).catch(e => {
  if (axios.isCancel(e)) {
    console.log('Request canceled', e.message)
  }
})

setTimeout(() => {
  source.cancel('Operation canceled by the user.');

  axios.post('/cancel/post', { a: 1 }, {
    cancelToken: source.token
  })
}, 100)

let cancel: Canceler

axios.get('/cancel/get', {
  cancelToken: new CancelToken((c) => {
    cancel = c;
  })
})

setTimeout(() => {
  cancel('Canceled 2')
}, 200)

