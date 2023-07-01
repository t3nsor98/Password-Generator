const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


//slider output
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

//logic for password generator
//lets build a function which recive a number and make a password length of that number
function generatePassword(num) {
    let password = [];
    for (let i = 0; i < num; i++) {
        password.push(characters[Math.floor(Math.random() * characters.length)])
    }
    return ( password.join(""));
}

//lets make a function o show password everytime button clicked
function showPassword() {
    let passLength = slider.value;
    let password1 , password2;
    password1 = generatePassword(passLength);
    password2 = generatePassword(passLength);
    let passArrary = [password1, password2];
    document.getElementById("password1").textContent = passArrary[0];
    document.getElementById("password2").textContent = passArrary[1];
}


//click to copy code
const pass1 = document.getElementById("password1");
const pass2 = document.getElementById("password2");

pass1.onclick = function() {
  document.execCommand("copy");
}

pass2.onclick = function() {
  document.execCommand("copy");
}


//remove the copy element after 3 second of showing
pass1.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", pass1.textContent);
    // console.log(event.clipboardData.getData("text"))
    document.getElementById("copy").textContent = "Copied!!!";
    setTimeout(function() {document.getElementById("copy").textContent = ""},3000);
    
  }
});

pass2.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", pass2.textContent);
    // console.log(event.clipboardData.getData("text"))
    document.getElementById("copy").textContent = "Copied!!!";
    setTimeout(function() {document.getElementById("copy").textContent = "";},3000);
  }
});


