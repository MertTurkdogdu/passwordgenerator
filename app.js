// DOM Elements
const passInput = document.getElementById("pass-input");
const passButton = document.getElementById("pass-button");

// Password Generator Function
function passGenerate() {
  let password = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "-@#$!?.";

  // loop to generate 10 times
  for (let i = 1; i <= 10; i++) {
    let char = Math.floor(Math.random() * str.length + 1);

    password += str.charAt(char);
  }

  // set the password value
  passInput.value = password;
}

// Generate button Event Listeners 
passButton.addEventListener("click", passGenerate);
