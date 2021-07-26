import axios, { AxiosTransformer } from '../../src/index'
import qs from 'qs'

// axios.defaults.headers.common['test23'] = '233'
//
// axios({
//   method: 'post',
//   url: '/config/post',
//   data: qs.stringify({
//     a: 1
//   }),
//   headers: {
//     test: '324232332'
//   },
// })

// axios({
//   transformRequest: [
//     (function(data) {
//       return qs.stringify(data)
//     }),
//     ...axios.defaults.transformRequest as AxiosTransformer[]
//   ],
//   transformResponse: [
//     ...axios.defaults.transformResponse as AxiosTransformer[],
//     function(data) {
//       if (typeof data === 'object') {
//         data.b = 3
//       }
//       return data
//     }
//   ],
//   method: 'post',
//   url: '/config/post',
//   data: {
//     a: 1
//   }
// }).then(res => {
//   console.log(res.data)
// })


const instance = axios.create({
  transformRequest: [
    (function(data) {
      return qs.stringify(data)
    }),
    ...axios.defaults.transformRequest as AxiosTransformer[]
  ],
  transformResponse: [
    ...axios.defaults.transformResponse as AxiosTransformer[],
    function(data) {
      if (typeof data === 'object') {
        data.b = 3
      }
      return data
    }
  ],
  headers: {
    yongganniuniu: 'bupakunnan'
  }
})

instance({
  method: 'post',
  url: '/config/post',
  data: { a: 1 }
}).then(res => {
  console.log(res.data);
});
