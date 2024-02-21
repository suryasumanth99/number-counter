
// grab the count-el element, store it in a countEl variable
let countEl=document.getElementById("count-el")
let count = 0
// grab the save-el element, store it in a saveEl variable
let saveEl=document.getElementById("save-el")

function increment() {
    count = count + 1
    // set countEl's innerText to the count
    countEl.textContent=count;
    
    
}

// 1. Create a function, save(), which logs out the count when it's called
function save(){
    console.log(count);
    let seperation = count+" - "
    saveEl.textContent+=seperation;
    countEl.textContent = 0;
    count=0;
}

