import axios, { AxiosError } from '../../src/index'

// axios({
//   method: 'get',
//   url: '/error/get1'
// }).then(res => {
//   console.log(res, 'res')
// }).catch(e => {
//   console.log(e, 'e')
// })
//
// axios({
//   method: 'get',
//   url: '/error/get',
//   param: {
//     a: 1,
//     b: 2
//   }
// })
//
// setTimeout(() => {
//   axios({
//     method: 'get',
//     url: '/error/get'
//   })
// }, 5000)

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then(res => {
  console.log(res, 'res')
}).catch((error: AxiosError) => {
  console.log(error.message, 'error.message')
  console.log(error.config, 'error.config')
  console.log(error.code, 'error.code')
  console.log(error.request, 'error.request')
  console.log(error.response, 'error.response')
})
