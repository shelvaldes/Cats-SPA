import getData from "../utils/getData"

const Home = async () => {
    const cats = await getData()
    const view = `
    <div class="Catswrapper">
    <div class="Cats">
        ${cats.map(cat => `
        <article class="Cat-item">
        <a href="#/${cat.id}">
            <img src="${cat.urls.regular}" alt="${cat.description}">
            <div class="tag"><p>by ${cat.user.username}</p></div>
            
        </a>
        </article>
        
        `).join('')}
    </div>  
    </div> 
    <footer>Powered by Unsplash</footer>
    `
    return view
}

export default Home