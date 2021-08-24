import axios from '../../src/index'

// axios({
//   method: 'get',
//   url: '/extend/get?c=3',
//   params: {
//     a: 1,
//     b: 2
//   }
// })
//
// axios.request({
//   url: '/extend/get',
//   params: {
//     request: true
//   },
// })
//
// axios.get('/extend/get123')
// axios.post('/extend/post')
// axios.head('/extend/head')
// axios.patch('/extend/patch', { msg: 'patch' })
// axios.delete('/extend/delete')
// axios.options('/extend/options')
// axios.put('/extend/put')

// axios({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     a: 1,
//     b: 2,
//   },
// })
//
// axios( '/extend/post', {
//   method: 'post',
//   data: {
//     c: 3,
//     d: 4,
//   },
// })

interface ResponseData<T> {
  code: number

  result: T

  message: string
}

interface User {
  age: number

  name: string
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.error(err))
}

async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user.result.age)
  }
}

test()
