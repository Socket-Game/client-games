import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tebak-lokasi.herokuapp.com'
})

export default instance
