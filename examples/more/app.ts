import axios from '../../src/index'

document.cookie = 'a=b'

// axios.get('/more/get').then(res => {
//   console.log(res.data)
// })
//
// axios.post('http://127.0.0.1:8088/more/server2', {}, { withCredentials: true })
//   .then(res => {
//     console.log(res.data)
//   })

// const instance = axios.create({
//   xsrfCookieName: 'XSRF-TOKEN-TIAN',
//   xsrfHeaderName: 'X-XSRF-TOKEN-TIAN',
// })
//
// instance.get('/more/get').then(res => {
//   console.log(res, 'res');
// })

// axios.post('/more/post', {a: 1}, {
//   auth: {
//     username: 'Tian',
//     password: '123456',
//   },
// } )

axios.get('/more/304').then(res => {
  console.log(res)
}).catch(e => {
  console.error(e)
})

axios.get('/more/304', {
  validateStatus(status) {
    return status >= 200;
  }
}).then(res => {
  console.log(res)
})
