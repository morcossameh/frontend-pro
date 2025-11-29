let personName = "Ali";

const heading = document.getElementById("heading")
console.dir(heading)

heading.textContent = `Hello ${personName || "Guest"}!`

const paragraphs = document.getElementsByTagName("p")

console.log(paragraphs[3])

for (const paragraph of paragraphs) {
  paragraph.style.color = "red"
  paragraph.style.fontSize = "2rem"
  paragraph.style.fontWeight = "bold"
}

const specialParagraphs = document.getElementsByClassName("special")

for (const specialParagraph of specialParagraphs) {
  specialParagraph.style.color = "blue"
}

const containerElement = document.getElementById("container")

const removedChild = containerElement.removeChild(paragraphs[3])

const newP = document.createElement("p")
newP.textContent = "This is a new paragraph created with JS"

container.appendChild(newP)

container.replaceChild(removedChild, newP)
