
/* import nodeFetch from 'node-fetch';

const API = createApi({
  accessKey: 'H4TPx6Ro7-WWc4YCcpneMMpGCmunz99gafUZTBMboyM',
  fetch: nodeFetch,
});
 */
//const API = 'https://api.unsplash.com/photos/?client_id=H4TPx6Ro7-WWc4YCcpneMMpGCmunz99gafUZTBMboyM'

//const API = 'https://api.unsplash.com/photos'
const API = 'https://api.unsplash.com/'
const MY_CATS = 'collections/69466815/'
const PHOTOS = 'photos/'
const KEY = '?client_id=H4TPx6Ro7-WWc4YCcpneMMpGCmunz99gafUZTBMboyM'


const getData = async (id) => {

    const apiURL = id ? API + PHOTOS + id + KEY : API + MY_CATS + PHOTOS + KEY;
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data
    } catch (error) {
        console.log('fetch error', error)
    }
}

export default getData
//`${API}${PHOTOS}${id}${KEY}`
// https://api.unsplash.com/photos/aumuk_vxek0?client_id=H4TPx6Ro7-WWc4YCcpneMMpGCmunz99gafUZTBMboyM