import axios from '../../src/index'

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})

const arr = new Int32Array([20, 31])

axios({
  method: 'post',
  url: '/base/buffer',
  data: arr,
}).then(res => {
  console.log(res, 'rsessssss')
})

axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
  data: {
    a: 1,
    b: 3
  }
}).then(res => {
  console.log(res, 'ressssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss')
})

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

axios({
  method: 'post',
  url: '/base/post',
  data: searchParams
})



