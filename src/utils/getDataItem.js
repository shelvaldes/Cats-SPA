const PIC = 'https://api.unsplash.com/photos/'
const KEY = '?client_id=H4TPx6Ro7-WWc4YCcpneMMpGCmunz99gafUZTBMboyM'


const getDataItem = async (id) => {
    const picURL = id ? `${PIC}${id}${KEY}` : PIC+KEY;
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data
    } catch (error) {
        console.log('fetch error', error)
    }
}

export default getDataItem