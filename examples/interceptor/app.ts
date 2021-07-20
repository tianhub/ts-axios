import axios from '../../src/index';

axios.interceptors.request.use((config) => {
  config.headers.test += '1';
  return config;
})

axios.interceptors.request.use((config) => {
  config.headers.test += '2';
  return config;
})

axios.interceptors.request.use((config) => {
  config.headers.test += '3';
  return config;
})

axios.interceptors.response.use(res => {
  res.data.msg += '5'
  return res;
})

const interceptorNum = axios.interceptors.response.use(res => {
  res.data.msg += '6'
  return res;
})

axios.interceptors.response.use(res => {
  res.data.msg += '7'
  return res;
})

axios.interceptors.response.eject(interceptorNum);

axios({
  method: 'get',
  url: '/simple/get',
  headers: {test: '1'},
}).then(res => {
  console.log(res, 'res')
})
