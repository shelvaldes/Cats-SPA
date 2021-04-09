import getData from "../utils/getData"

const Home = async () => {
    const cats = await getData()
    const view = `
    <div class="Cats">
        ${cats.map(cat => `
        <article class="Cat-item">
        <a href="#/${cat.id}">
            <img src="${cat.urls.regular}" alt="${cat.description}">
            <p>by ${cat.user.username}</p>
        </a>
    </article>
        
        `).join('')}
    </div>   
    `
    return view
}

export default Home