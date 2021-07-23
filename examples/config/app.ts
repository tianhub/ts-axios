import axios from '../../src/index';
import qs from 'qs'

axios.defaults.headers.common['test23'] = '233'

axios({
  method: 'post',
  url: '/config/post',
  data: qs.stringify({
    a: 1
  }),
  headers: {
    test: '324232332'
  },
})
