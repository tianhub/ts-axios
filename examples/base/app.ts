import axios from '../../src/index'

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})

const arr = new Int32Array([20, 31]);

axios({
  method: 'post',
  url: '/base/buffer',
  data: arr
})



