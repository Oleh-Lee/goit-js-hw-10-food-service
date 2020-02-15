import tamplest from './templ.hbs'
import menu from './menu.json'
import './styles.css';
import './menu.json';
import './themes.js'

const refs = {
    ul: document.querySelector('.menu')
}

function buildPostFeed(menu){
    const murkup = menu.map(menu => tamplest(menu)).join('');
    refs.ul.insertAdjacentHTML('beforeend', murkup)
}
buildPostFeed(menu)


console.log('eee')


