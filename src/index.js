import Header from './templates/Header'
import Home from './pages/Home'
import Cat from './pages/Cat'
import Error404 from './pages/Error404'

const routes = {
    '/': Home,
    '/:id': Cat,
    '/contact': 'Contact',
}

const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')

    header.innerHTML = await Header()
}