import ElementManipulator from './dom-utils.js'
import './styles.css'

const content = new ElementManipulator('content')
const header = new ElementManipulator('header')
header.createAndAppendHTML('div', 'Home', 'btn', 'home')
header.createAndAppendHTML('div', 'Menu', 'btn', 'menu')
header.createAndAppendHTML('div', 'Contact', 'btn', 'contact')
header.createAndAppendHTML('div', 'About', 'btn', 'about')

const main = new ElementManipulator('main')
main.createAndAppendHTML('h1', 'Welcome to Casa Burgers')

content.appendChild(header.elementCurrent)
content.appendChild(main.elementCurrent)

console.log(content.elementCurrent)
console.log(content.elementCurrent.innerHTML)
