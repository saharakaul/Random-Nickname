//Event listeners
document.getElementById("randomNickname").addEventListener("click", generateRandomNickname);
document.getElementById("allNicknames").addEventListener("click", displayAllNicknames);

//Array
let nickNames = ["Binx", "Hara", "Haha", "Princess", "Baby"];

//Functions

function displayAllNicknames() {
    for (let i = 0; i < nickNames.length; i++){
        document.getElementById("displayNicknames").innerHTML += " " + nickNames[i];
    }
}
function generateRandomNickname(){
    let randomIndex = Math.randomInt(0, nickNames.length);
   document.getElementById("displayNicknames").innerHTML = nickNames[randomIndex];
    
}