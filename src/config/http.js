// arquivo de rotas para uso do axios
import axios from 'axios'

const localUrlApi = `http://localhost:3001`

const http = axios.create({
    baseURL: process.env.REACT_APP_API || localUrlApi
})

http.defaults.headers['content-type'] = 'application/json'

export default http;