// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"

const dogContainer = document. getElementById('dog-info')



function getNewDog(){
    const nextDogData = dogs.shift()
    return nextDogData ? new Dog(nextDogData) : "No more dogs"
}

function render(){
    const nextDog = getNewDog()
    const dogContainer = document.querySelector('main').innerHTML = nextDog.getDogHtml()
}

render()
