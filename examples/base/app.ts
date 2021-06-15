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

axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
  },
  data: {
    a: 1,
    b: 3
  }
})

// const searchParamsString = 'q=whoami&source=baidu'
// const searchParams = new URLSearchParams(searchParamsString)
//
// axios({
//   method: 'post',
//   url: '/base/post',
//   data: searchParams
// })

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

axios({
  method: 'post',
  url: '/base/post',
  data: searchParams
})



