const mainHeading = document.createElement('h1')
mainHeading.id = 'main-heading'
mainHeading.textContent = 'Hello World!'
document.body.appendChild(mainHeading)

const mainText = document.createElement('p')
mainText.id = 'main-text'
mainText.className = 'boring-text'
mainText.textContent = "Look, I'm some text!"
document.body.appendChild(mainText)