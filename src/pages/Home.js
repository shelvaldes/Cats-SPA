import getData from "../utils/getData"

const Home = async () => {
    const cats = await getData()
    const view = `
    <div class="Cats">
        ${cats.map(cat => `
        <article class="Cat-item">
        <a href="#/${cat.id}">
            <img src="${cat.urls.regular}" alt="${cat.description}">
            <h4>Author</h4>
            <h2>${cat.user.username}</h2>
        </a>
    </article>
        
        `).join('')}
    </div>   
    `
    return view
}

export default Home