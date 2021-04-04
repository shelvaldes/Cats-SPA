const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'
    //location.hash.toLocaleLowerCase() || '/'

export default getHash