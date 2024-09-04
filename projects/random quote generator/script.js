
const quotes = [
    "Whether you think you can or you think you can't, you're right. --- Henry Ford ---",
    "You miss 100% of the shots you don't take. --- Wayne Gretzky ---",
    "It does not matter how slowly you go as long as you do not stop. --- Confucius ---",
    "I would rather die of passion than of boredom. --- Vincent Van Gogh ---",
    "There is no substitute for hard work. --- Thomas Edison ---",
    "Love the life you live. Live the life you love. --- Bob Marley ---",
    "Love is composed of a single soul inhabiting two bodies. --- Aristotle ---",
    "Life is made of ever so many partings welded together. --- Charles Dickens ---",
    "No act of kindness, no matter how small, is ever wasted. --- Aesop ---",
    "Where there is love there is life. --- Mahatma Gandhi ---"
]

const useIndexes = new Set()
const quoteElement = document.getElementById('quote')

function generateQuote() {
    if(useIndexes.size == quotes.length) {
        useIndexes.clear()
    }

    while(true) {
        const randomIndex = Math.floor(Math.random() * quotes.length)

        if(useIndexes.has(randomIndex)) continue

        const quote = quotes[randomIndex]
        quoteElement.innerHTML = quote
        useIndexes.add(randomIndex)
        break
    }   
}