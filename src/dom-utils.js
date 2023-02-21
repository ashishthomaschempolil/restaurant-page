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

export default ElementManipulator
