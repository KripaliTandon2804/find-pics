import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ouxmRQ49vw_NIii9Iti8v02xpioEUBCIE6SGkNKpAhA'
    }
})