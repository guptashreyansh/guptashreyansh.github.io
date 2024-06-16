

function main() {
  createLinkButtons()
}

function createLinkButtons() {
  var linkContainer = document.querySelector(`.${CLASSES.jsLinksButtonsContainer}`)

  Object.keys(LINK_TYPES).forEach(function(linkType, index) {
    var element = document.createElement("button")
  
    element.classList.add(CLASSES.jsLinksButton, CLASSES.linksButton)
    if (!index) element.classList.add(CLASSES.selected)
    element.setAttribute(ATTRIBUTES.dataLinkType, LINK_TYPES[linkType])

    element.innerText = LINK_TYPES[linkType]
    element.addEventListener('click', handleLinkButtonClick)
    linkContainer.appendChild(element)
  })

  renderLinks(LINKS[LINK_TYPES.resume])
}

function handleLinkButtonClick(event) {
  var buttons = document.querySelectorAll(`.${CLASSES.jsLinksButton}`)
  buttons.forEach(function(button){
    button.classList.remove(CLASSES.selected)
  })
  event.target.classList.add(CLASSES.selected)

  var linkType = event.target.getAttribute(ATTRIBUTES.dataLinkType)
  var links = LINKS[linkType]
  renderLinks(links)
}

function renderLinks(links) {
  var linksContainer = document.querySelector(`.${CLASSES.jsLinksContainer}`)
  linksContainer.innerHTML = ""
  links.forEach(function(link) {
    const element = createLinkElement(link)
    linksContainer.appendChild(element)
  })
}

function createLinkElement(link) {
  var element = document.createElement("div")
  element.classList.add(CLASSES.profileLink)

  var icon = document.createElement("img")
  icon.setAttribute("src", link.iconPath)
  icon.classList.add(CLASSES.profileIcon)

  var anchor = document.createElement("a")
  anchor.setAttribute("href", link.link)
  anchor.setAttribute("target", "_blank")

  anchor.appendChild(icon)
  element.appendChild(anchor)
  return element
}

main()
