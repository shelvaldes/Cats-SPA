
/* import nodeFetch from 'node-fetch';

const API = createApi({
  accessKey: 'H4TPx6Ro7-WWc4YCcpneMMpGCmunz99gafUZTBMboyM',
  fetch: nodeFetch,
});
 */
//const API = 'https://api.unsplash.com/photos/?client_id=H4TPx6Ro7-WWc4YCcpneMMpGCmunz99gafUZTBMboyM'

const API = 'https://api.unsplash.com/photos/'
const KEY = 'H4TPx6Ro7-WWc4YCcpneMMpGCmunz99gafUZTBMboyM'


const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data
    } catch (error) {
        console.log('fetch error', error)
    }
}

export default getData