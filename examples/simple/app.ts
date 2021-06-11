import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get?c=3',
  param: {
    a: 1,
    b: 2
  }
})





