// Remember to import the data and Dog class!
import {dogsCopy, dogs} from "./data.js"
import Dog from "./Dog.js"

const dogContainer = document. getElementById('dog-info')
let isWaiting = false

console.log(dogsCopy)
console.log(dogs)
document.addEventListener("click", e =>{
    if (isWaiting || !nextDog) {
       console.log("cannot do anything else or right now"); // Return early if waiting, and don't execute the rest of the code.
    }

    if (e.target.classList.contains("button-div") || e.target.classList.contains("button-selector")) {
        if (e.target.classList.contains("like")) {
            nextDog.setSwipedStatus();
            nextDog.setLikedStatus();
        } else if (e.target.classList.contains("dislike")) {
            nextDog.setSwipedStatus();
        }
    }

    isWaiting = true;
    render();

    setTimeout(() => {
        nextDog = getNewDog();
        render();
        isWaiting = false;
    }, 2000);
})



function getNewDog(){
    if(dogsCopy){
        const nextDogData = dogsCopy.shift()
        nex //finish this later

    }
    
    return nextDogData ? new Dog(nextDogData) : console.log("no more dogs")
}


function render(){
    const dogContainer = document.querySelector('main')
    const mainContainer = document.querySelector(".container")// eliminate this and move only main so the messag
    if (nextDog){
        dogContainer.innerHTML = nextDog.getDogHtml() 
    } else{
        dogContainer.innerHTML = `<h1>NO MORE DOGS</h1>`
    }
    
}

let nextDog = getNewDog() 
render()
