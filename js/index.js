// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"

const dogContainer = document. getElementById('dog-info')


document.addEventListener("click", e =>{
    if(e.target.classList.contains("button-div") || e.target.classList.contains("button-selector")){
        if(e.target.classList.contains("like")){
            nextDog.setSwipedStatus()
            nextDog.setLikedStatus()
        } else if (e.target.classList.contains("dislike")){
            nextDog.setSwipedStatus()
        }
            render()
    }
})



function getNewDog(){
    const nextDogData = dogs.shift()
    return nextDogData ? new Dog(nextDogData) : "No more dogs"
}


function render(){
    const dogContainer = document.querySelector('main').innerHTML = nextDog.getDogHtml()
}

function swiped(dog){
    console.log(dog.hasBeenSwipped)
}

let nextDog = getNewDog() 
render()
