
const inputValue = document.getElementById('input')
const message = document.getElementById('message')

function check() {
    const value = inputValue.value
    const reverse = reverseString(value)
    const capitalize = value.toUpperCase()
    
    if(value === reverse) {
        message.textContent = `${capitalize} is a palindrome!`
    }  else {
        message.textContent = `${capitalize} is not a palindrome!`
    }

    //no input
    if(value.length === 0) {
        message.textContent = `Please type in a word`
    }

    inputValue.value = ''
}

function reverseString(stringInput) {
    return stringInput.split('').reverse().join('')
}


