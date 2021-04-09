import getHash from '../utils/getHash'
import getData from '../utils/getData'
//import getDataItem from '../utils/getDataItem'

const Cat = async () => {
    const id = getHash()
    const cat = await getData(id)
    const view = `
        <div class="Cats-inner">
            <article class="Cats-card">
                <img src="${cat.urls.regular}" alt="${cat.description}">
                
            </article>
            <article class="Cats-info">
            <h5>Author:</h5>
                <h4>${cat.user.username}</h4>
                    
                    <h6>${cat.user.name}</h6>
                </a>
            </article>
        </div>
    `
    return view
}
export default Cat

/* <a href="${cat.user.links.self}?client_id=H4TPx6Ro7-WWc4YCcpneMMpGCmunz99gafUZTBMboyM"> */