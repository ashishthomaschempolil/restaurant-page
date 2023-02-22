import { ElementManipulator, MenuCard } from './dom-utils'
import './styles.css'
import classicCheeseBurgerImage from './assets/classic-cheeseburger.png'
import baconBurgerImage from './assets/bacon-burger.png'
import veggieBurgerImage from './assets/veggie-burger.png'
import loadedFriesImage from './assets/loaded-fries.png'

const content = new ElementManipulator('content')
const header = new ElementManipulator('header')
header.createAndAppendHTML('div', 'Home', 'btn', 'home')
header.createAndAppendHTML('div', 'Menu', 'btn', 'menu')
// header.createAndAppendHTML('div', 'Contact', 'btn', 'contact')
header.createAndAppendHTML('div', 'About', 'btn', 'about')

content.appendChild(header.elementCurrent)

// home: This is the default page
const home = () => {
  const main = new ElementManipulator('main')
  main.createAndAppendHTML('h1', 'Welcome to Brigg\'s Burgers', 'home-title')

  content.appendChild(main.elementCurrent)
}

// menu: This is the menu page
const menu = () => {
  const main = new ElementManipulator('main')
  const bgMenu = new ElementManipulator('bg-menu')

  // create menu cards
  let title = 'Classic CheeseBurger'
  let desc = '100% beef patty, American cheese, lettuce, tomato, onion, and pickles, served on a sesame seed bun'
  let price = '$8.99'
  let image = classicCheeseBurgerImage
  const classicBurger = new MenuCard(title, desc, price, image)
  classicBurger.createCard()
  bgMenu.appendChild(classicBurger.card)

  title = 'Bacon BBQ Burger'
  desc = '100% beef patty, crispy bacon, cheddar cheese, onion rings, lettuce, and smoky BBQ sauce, served on a brioche bun'
  price = '$10.99'
  image = baconBurgerImage
  const baconBurger = new MenuCard(title, desc, price, image)
  baconBurger.createCard()
  bgMenu.appendChild(baconBurger.card)

  title = 'Veggie Burger'
  desc = 'Grilled portobello mushroom, roasted red peppers, avocado, lettuce, tomato, and hummus, served on a multigrain bun'
  price = '$9.99'
  image = veggieBurgerImage
  const veggieBurger = new MenuCard(title, desc, price, image)
  veggieBurger.createCard()
  bgMenu.appendChild(veggieBurger.card)

  title = 'Loaded Fries'
  desc = 'Crispy French fries topped with melted cheddar cheese, crispy bacon, green onions, and a drizzle of ranch dressing'
  price = '$6.99'
  image = loadedFriesImage
  const loadedFries = new MenuCard(title, desc, price, image)
  loadedFries.createCard()
  bgMenu.appendChild(loadedFries.card)

  main.appendChild(bgMenu.elementCurrent)
  content.appendChild(main.elementCurrent)
}

const about = () => {
  const main = new ElementManipulator('main')
  const about = new ElementManipulator('about-content')
  about.createAndAppendHTML('h1', 'About Us', 'about-title')

  // create about text
  const text = "At Brigg's Burgers, we believe that great food starts with great ingredients.<br><br>That's why we use only the freshest, highest-quality ingredients in all of our burgers, from the juicy beef patties to the crisp lettuce and ripe tomatoes.<br><br>Our burgers are handcrafted and made to order, so you can be sure that each one is cooked to perfection and packed with flavor. Whether you prefer a classic cheeseburger, a spicy jalapeno burger, or a veggie burger, we have something for everyone.<br><br>But we're more than just burgers. Our menu also features a range of delicious sides, such as crispy fries, onion rings, and sweet potato tots. And if you're looking for something sweet, we've got you covered with our mouth-watering milkshakes and desserts.<br><br>At Brigg's Burgers, we're committed to providing our customers with a memorable dining experience. Our friendly staff and cozy atmosphere will make you feel right at home. So come on in, grab a seat, and enjoy a delicious burger today!"
  const abtText = document.createElement('p')
  abtText.innerHTML = text

  about.appendChild(abtText)
  main.appendChild(about.elementCurrent)

  content.appendChild(main.elementCurrent)
}

home()

const btns = document.querySelectorAll('.btn')
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const btnId = btn.id
    // remove main element from content, otherwise it will keep appending
    content.elementCurrent.removeChild(content.elementCurrent.lastChild)
    if (btnId === 'home') {
      home()
    } else if (btnId === 'menu') {
      menu()
    } else if (btnId === 'about') {
      about()
    }
  })
}
)
