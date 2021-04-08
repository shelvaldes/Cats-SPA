const getHash = () => 
    location.hash.slice(1).split('/')[1] || '/'
    //location.hash.toLocaleLowerCase() || '/'

export default getHash