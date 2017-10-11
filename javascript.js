//   V A R I A B L E S
var guessBtn = document.getElementById('guessButton'); //this is just grabbing the button
var clearButton = document.getElementById("clearButton");
var resetButton = document.getElementById("resetButton");
var guessInput = document.getElementById("guessInputText"); //this is grabbing the string from the input field
var userMin = document.getElementById("minInput");
var userMax = document.getElementById("maxInput"); //this var is just the max input

// I only want to generate this if there is a min and max present

var correctNumber = getRandomArbitrary(userMinNumber, userMaxNumber);
var userMinNumber = getMinNumber(userMin);
var userMaxNumber = getMaxNumber(userMax);

//   E V E N T   L I S T E N E R S
guessBtn.addEventListener('click', guessInputSubmit);
clearButton.addEventListener('click', clearInputSubmit);
resetButton.addEventListener('click', resetButtonSubmit);
guessInput.addEventListener('keyup', enableButtons);
userMax.addEventListener('keyup', getMaxNumber);
userMin.addEventListener('keyup', getMinNumber); // this is running function getMinNumber upon keyup


//   make min and max strings into numbers
function getMinNumber(){
  var minInt = parseInt(userMin.value);
  console.log("Your min is " + minInt);
  return minInt;
}
function getMaxNumber(){
  var maxInt = parseInt(userMax.value);
  console.log("Your max is " + maxInt);
  return maxInt;
}


//   ENABLE THE BUTTONS WHEN TEXT IS ENTERED
function enableButtons(){
  document.getElementById('guessButton').disabled = false;
  document.getElementById('clearButton').disabled = false;
  document.getElementById('resetButton').disabled = false;
}


//   GENERATE A RANDOM WHOLE NUMBER
function getRandomArbitrary(min, max) {
  var randomNumber = Math.round(Math.random() * (max - min) + min);
  console.log("Your random number is " + randomNumber + ", which is a " + typeof randomNumber);
  return randomNumber;
}

//   WHAT HAPPENS WHEN YOU HIT THE 'GUESS' BUTTON   \\
function guessInputSubmit(event){
  event.preventDefault();    
  var guessedNumber = parseInt(guessInput.value);
  console.log("You guessed " + guessedNumber);
  console.log("Which is a " + typeof guessedNumber);


  //   CHECK THE GUESS IS BETWEEN MIN AND MAX VALUES   \\
  function minMaxCheck (min, max) {
    if (guessedNumber < min )  {  //&& isNaN(parseInt(value)))
        alert("Please enter a number greater than " + min); 
    }
    else if (guessedNumber > max) {
        alert("Please enter a number less than " + max); 
    }
    else if ((guessedNumber > min) && (guessedNumber < max)){
        console.log("Nice range.")
    }
    else 
        console.log("wtf");
   }  
  minMaxCheck(userMinNumber, userMaxNumber);


  //   COMPARING THE USER AND RANDOM NUMBER   \\
    if (guessedNumber > correctNumber) {
     document.querySelector('#clueText').innerText = "That's too high!";
    }
    else if (guessedNumber < correctNumber) {
      document.querySelector('#clueText').innerText = "That's too low!";
    }
    else if (guessedNumber === correctNumber){
      document.querySelector('#clueText').innerText = "FUCK YEAH!";
      var unicornCorral = document.getElementById('corral');
      unicornCorral.insertAdjacentHTML('afterbegin', '<img src="unicorn.gif" width="200px" margin="auto">');
    }
    else 
      alert("Please enter a number.");
    
  document.querySelector('#guessText').innerText = guessedNumber;
}


//   WHAT HAPPENS WHEN YOU HIT THE 'CLEAR' BUTTON  \\
function clearInputSubmit(event){
  event.preventDefault();
  console.log("You hit clear!");
  document.getElementById("guessInputText").value = "";
  document.getElementById("clearButton").disabled = true;
}

//   WHAT HAPPENS WHEN YOU HIT 'RESET' BUTTON   \\
function resetButtonSubmit(event) {
  event.preventDefault();   
  location.reload(true);
  console.log("You hit reset!");
  document.querySelector('#clueText').textContent = " ";
  document.querySelector('#guessText').textContent = " ";
  document.getElementById("resetButton").disabled = true;

}

//   HERE IS THE BOTTOM OF THE DOCUMENT!!!   \\
//          THANK YOU FOR PLAYING!!!         \\