class ElementManipulator {
  constructor (id) {
    if (document.getElementById(id)) {
      this.element = document.getElementById(id)
    } else {
      this.element = document.createElement('div')
      this.element.id = id
    }
  }

  createAndAppendHTML (type = 'div', childText, childClass, childId) {
    const child = document.createElement(type)
    if (childClass) {
      child.classList.add(childClass)
    }
    if (childId) {
      child.id = childId
    }
    if (childText) {
      child.textContent = childText
    }
    this.element.appendChild(child)
  }

  appendChild (element) {
    this.element.appendChild(element)
  }

  get elementCurrent () {
    return this.element
  }

  set elementCurrent (element) {
    this.element = element
  }
}

class MenuCard {
  constructor (title, description, price, image) {
    this.title = title
    this.description = description
    this.price = price
    this.image = image
    this.card = null
  }

  createCard () {
    const card = document.createElement('div')
    card.classList.add('menu-card')

    // image
    const cardImage = document.createElement('img')
    cardImage.src = this.image
    cardImage.alt = this.title
    card.appendChild(cardImage)

    // menu-content
    const menuContent = document.createElement('div')
    menuContent.classList.add('menu-content')

    // title
    const title = document.createElement('h2')
    title.textContent = this.title
    // description
    const description = document.createElement('p')
    description.textContent = this.description
    // price
    const price = document.createElement('h3')
    price.textContent = this.price

    menuContent.appendChild(title)
    menuContent.appendChild(description)
    menuContent.appendChild(price)

    card.appendChild(menuContent)
    this.card = card
  }
}

export { ElementManipulator, MenuCard }
