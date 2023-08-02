import dogs from "./data.js"

class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    getDogHtml(){
        const {name, avatar, age, bio} = this
        return `
        <img class="dog-picture" src="${avatar}" alt="">

             <div class="status">
                <img class="status-img" src="images/badge-like.png" alt="liked image">
            </div>
            <div class="status">
                <img class="status-img" src="images/badge-like.png" alt="liked image">
            </div>
            <div id="dog-info" class="dog-info">
                <h1 class="dog-title">${name}, ${age}</h1>
                <h3 class="dog-bio">${bio}</h3>
            </div> 
            `
    }
}


export default Dog