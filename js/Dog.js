import dogs from "./data.js"

class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    setSwipedStatus(){
        if(!this.hasBeenSwiped){
            this.hasBeenSwiped= true
        } else {
            this.hasBeenSwiped = false
        }
        console.log(`The swiped status is ${this.hasBeenSwiped}`)
    }
    setLikedStatus(){
        if(!this.hasBeenLiked){
            this.hasBeenLiked = true
        } else{
            this.hasBeenLiked = false
        }
        console.log(this.hasBeenLiked)
        }
    getDogHtml(){
        const {name, avatar, age, bio, hasBeenLiked, hasBeenSwiped} = this

        return `
        <img class="dog-picture" src="${avatar}" alt="">
        <div class="status">
            <img id="status-img" class="${!hasBeenSwiped ? "invisible" : " "}"  src="${hasBeenLiked ? 'images/badge-like.png' : 'images/badge-nope.png' }" alt="liked image">
        </div>
        <div id="dog-info" class="dog-info">
            <h1 class="dog-title">${name}, ${age}</h1>
            <h3 class="dog-bio">${bio}</h3>
        </div> 
            `
    }
}


export default Dog