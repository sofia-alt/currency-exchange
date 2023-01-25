import axios from 'axios'

const Http = axios.create({
  baseURL: 'https://www.cbr-xml-daily.ru/'
})

Http.interceptors.response.use(
  response => response.data,
  exc => {
    console.error(exc); return Promise.reject(exc)
  })
export default Http
