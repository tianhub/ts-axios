import axios from '../../src/index'

document.cookie = 'a=b'

axios.get('/more/get').then(res => {
  console.log(res.data)
})

axios.post('http://localhost:8088/more/server2', {}, { withCredentials: true })
  .then(res => {
    console.log(res.data)
  })
