//   TURING PROJECT :: N U M B E R  G U E S S E R :: BY GULLY   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//   Assignment URL: http://frontend.turing.io/projects/number-guesser.html



//   V A R I A B L E S  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var guessBtn = document.getElementById('guessButton');        // grabbing the guess button
var clearButton = document.getElementById("clearButton");     // clear button
var resetButton = document.getElementById("resetButton");     // reset button
var guessInput = document.getElementById("guessInputText");   // grabbing the string from the input field
var userMin = document.getElementById("minInput");            // min input string
var userMax = document.getElementById("maxInput");            // max input string
var genNumber = document.getElementById('minMaxButton');      // number generator button
var realMin = 0;            // default value for Min - gets reassigned in genNumber
var realMax = 100;          // default value for Max - gets reassigned in genNumber
var correctNumber = getRandomArbitrary(0, 100);               // value of secret number



//   E V E N T   L I S T E N E R S  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
guessBtn.addEventListener('click', guessInputSubmit);
clearButton.addEventListener('click', clearInputSubmit);
resetButton.addEventListener('click', resetButtonSubmit);
guessInput.addEventListener('keyup', enableButtons);
userMin.addEventListener('keyup', function(){
  getMinNumber(userMin);
});
userMax.addEventListener('keyup',function(){
  getMaxNumber(userMax);
});
genNumber.addEventListener('click', genNumberButtonSubmit);


//   F U N C T I O N S   C A L L E D   B Y   E V E N T S \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//   MAKE THE MIN STRING INTO A NUMBER
function getMinNumber(string){
  var minInt = parseInt(string.value);
  console.log("Your min is " + minInt);
  document.querySelector('#printMin').textContent = string.value;
  return minInt;
}


//   MAKE THE MAX STRING INTO A NUMBER
function getMaxNumber(string){
  var maxInt = parseInt(string.value);
  console.log("Your max is " + maxInt);
  document.querySelector('#printMax').textContent = string.value;
    document.getElementById('minMaxButton').disabled = false;
  return maxInt;
}


//   ENABLE THE BUTTONS WHEN TEXT IS ENTERED   \\
function enableButtons(){
  document.getElementById('guessButton').disabled = false;
  document.getElementById('clearButton').disabled = false;
  document.getElementById('resetButton').disabled = false;
}


//   GENERATE A RANDOM WHOLE NUMBER   \\
function getRandomArbitrary(min, max) {
  var randomNumber = Math.round(Math.random() * (max - min) + min);
  console.log("Your new random number is " + randomNumber + ", which is a " + typeof randomNumber);
  return randomNumber;
}



//   WHAT HAPPENS WHEN YOU HIT THE 'GUESS' BUTTON   \\
function guessInputSubmit(){
  event.preventDefault();    
  var guessedNumber = parseInt(guessInput.value);
    console.log("You guessed " + guessedNumber);
    console.log("Which is a " + typeof guessedNumber);  
    document.querySelector('#guessText').innerText = guessedNumber;
  rangeCheck(realMin, realMax);
  
  //   VARIABLES TO UPDATE THE MIN AND MAX - REASSIGNED IF USER WINS
  var newMin = realMin;
  var newMax = realMin;

  //   CHECKING THE USER GUESS IS IN MIN/MAX RANGE   \\
  function rangeCheck(min, max){
    if (guessedNumber < min )  {  
        alert("Please enter a number greater than " + min); 
    }
    else if (guessedNumber > max) {
        alert("Please enter a number less than " + max); 
    }
    else if ((guessedNumber >= min) && (guessedNumber <= max)){
        console.log("Nice range.")
    }
    else 
        console.log("That's not a number!");
  }  

  //   COMPARING THE USER NUMBER AND RANDOMLY GENERATED NUMBER   \\
  if (guessedNumber > correctNumber){
   document.querySelector('#clueText').innerText = "That is too high!";
  }
  else if (guessedNumber < correctNumber) {
    document.querySelector('#clueText').innerText = "That is too low!";
  }
  else if (guessedNumber === correctNumber){
    document.querySelector('#clueText').innerText = "Correct! You won a unicorn!";
    var unicornCorral = document.getElementById('corral');
    unicornCorral.insertAdjacentHTML('afterbegin', 
      '<img src="unicorn.gif" width="100px" margin="auto" alt="sparkly unicorn picture">');
    newMin = (realMin -= 10);
    newMax = (realMax += 10);
    console.log("New min is " + newMin + "," + "new max is " + newMax);
    rangeCheck(newMin, newMax);
    document.querySelector('#printMin').innerText = newMin;
    document.querySelector('#printMax').innerText = newMax;
    correctNumber = getRandomArbitrary(newMin, newMax);     
  }
  else 
    alert("Please enter a number. Don't you want a unicorn?"); 
}
// END OF GUESS BUTTON ACTION


//   WHAT HAPPENS WHEN YOU HIT THE 'CLEAR' BUTTON   \\
function clearInputSubmit(event){
  event.preventDefault();
  console.log("You hit clear!");
  document.getElementById("guessInputText").value = "";
  document.getElementById("clearButton").disabled = true;
}



//   WHAT HAPPENS WHEN YOU HIT THE 'GENERATE NEW NUMBER' BUTTON
function genNumberButtonSubmit(event){
  event.preventDefault();
  realMin = getMinNumber(userMin); 
  realMax = getMaxNumber(userMax);
  correctNumber = getRandomArbitrary(realMin, realMax);
  document.querySelector('#guessText').textContent = '';
  document.querySelector('#clueText').textContent = " ";
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

//  |  |  |  |  |  |  C O D E   J A I L  |  |  |  |  |  |  |  

//   HERE IS THE BOTTOM OF THE SCRIPT!!!   \\
//          THANK YOU FOR PLAYING!!!         \\