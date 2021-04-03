import getData from "../utils/getData"

import getData from '../utils/getData.js'

const Home = async () => {
    const cats = await getData()

    const view = `
    <div class="Cats">
        ${cats.results.map(chat = => `
        <article class="Cat-item">
        <a href="#/1/">
            <img src="image" alt="name">
            <h2>Author</h2>
        </a>
    </article>
        
        `).join('')}

        
    </div>
    
    `
    return view
}

export default Home