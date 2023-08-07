// Remember to import the data and Dog class!
import {dogsCopy, dogs} from "./data.js"
import Dog from "./Dog.js"

const dogContainer = document. getElementById('dog-info')
const buttonContainer = document.getElementById("btn-container")
console.log(buttonContainer)

document.addEventListener("click", e =>{
        if (e.target.classList.contains("button-div") || e.target.classList.contains("button-selector")) {
            if (e.target.classList.contains("like")) {
                nextDog.setSwipedStatus();
                nextDog.setLikedStatus();
            } else if (e.target.classList.contains("dislike")) {
                nextDog.setSwipedStatus();
            }
            render();
    buttonContainer.classList.add('invisible')
    setTimeout(() => {
        nextDog = getNewDog();
        render();
        buttonContainer.classList.remove('invisible')
        isWaiting = false;
    }, 650);
    }
    
})



function getNewDog(){
    if(dogsCopy){
        const nextDogData = dogsCopy.shift()
        return nextDogData ? new Dog(nextDogData) : console.log("no more dogs")

    }
    
    
}


function render(){
    const dogContainer = document.querySelector('main')
    if (nextDog){
        dogContainer.innerHTML = nextDog.getDogHtml() 
    } else{
        dogContainer.innerHTML = 
        `
        <div class="last-container">
        <h1>NO MORE DOGS</h1>
        <h2>Thank you for choosing your favourite dog</h2>
        <h2 class="dog-emoji">🐶</h2>
        </div>
        `
    }
    
}

let nextDog = getNewDog() 
render()
