import axios from '../../src/index'
import qs from 'qs';

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

// axios.get('/more/304').then(res => {
//   console.log(res)
// }).catch(e => {
//   console.error(e)
// })
//
// axios.get('/more/304', {
//   validateStatus(status) {
//     return status >= 200;
//   }
// }).then(res => {
//   console.log(res)
// })

// axios.get('/more/get', {
//   params: new URLSearchParams('a=b&c=d')
// })
//
// axios.get('/more/get', {
//   params: {
//     a: 1,
//     b: 2,
//     c: ['d', 'e', 'f']
//   },
// })
//
// const instance = axios.create({
//   paramsSerializer(params) {
//     return qs.stringify(params, { arrayFormat: 'brackets' })
//   }
// })
//
// instance.get('/more/get', {
//   params: {
//     a: 1,
//     b: 2,
//     c: ['d', 'e', 'f']
//   },
// })

// axios.get('https://www.qycloud.com.cn/api/user/avatar/avatardownload/120/120/1149375181@qq.com/1627601008');
//
// axios.get('/api/user/avatar/avatardownload/120/120/1149375181@qq.com/1627601008', {
//   baseURL: 'https://www.qycloud.com.cn/'
// });

function getA() {
  return axios.get('/more/A')
}

function getB() {
  return axios.get('/more/B')
}

axios.all([getA(), getB()])
  .then(axios.spread(function(resA, resB) {
    console.log(resA.data)
    console.log(resB.data)
  }))

axios.all([getA(), getB()])
  .then(([resA, resB]) => {
    console.log(resA.data)
    console.log(resB.data)
  })

const fakeConfig = {
  baseURL: 'https://www.baidu.com/',
  url: '/user/12345',
  params: {
    idClient: 1,
    idTest: 2,
    testString: 'thisIsATest'
  }
}
console.log(axios.getUri(fakeConfig))
