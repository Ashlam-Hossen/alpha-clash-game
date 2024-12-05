// function playOnclik(){
// //   step - hide the home screen.to hide the screen and the class hidden to the home section
// const playHomeScreen = document.getElementById('play-home');
// playHomeScreen.classList.add('hidden');



// // step-2 show the playground

// const playgroundSection = document.getElementById('play-ground');
// // console.log(playgroundSection.classList);
//  playgroundSection.classList.remove('hidden');
// }



//-----------call back function----------
function handleKeyButtonPress(event){
   const playerPressed = event.key;
    console.log('you pressed',playerPressed);

 // sto the game if pressed 'ESC'  
 if(playerPressed === 'Escape'){
    gameOver();
 } 

// get the expectecd to press

   const currentAlphabetElement= document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText;
   const expectecdAlphabet = currentAlphabet.toLowerCase();
   console.log(expectecdAlphabet,playerPressed);

//    check matched or not 

   if(playerPressed === expectecdAlphabet){
    // console.log('you get the point');

    const currentScore = getTextElementValueById('current-score');
    console.log(currentScore);
    const updateScore = currentScore + 1;
    setTextElementValueById('current-score',updateScore);

//-----------------------------------------------------------------------------------------------

    //update score:
    //1.get the current score
    // const currentScoreElement = document.getElementById('current-score') ;
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseFloat(currentScoreText);
    // console.log(currentScore);

    // //2.increase the score by 1 
    // const newScore = currentScore + 1;
    // //3.show the updated score
    // currentScoreElement.innerText = newScore;

    removeBackgroundColorById(expectecdAlphabet)
    continueGame()
   }
   else{
    console.log('you missed point');

    const currentLife = getTextElementValueById('current-life');
    const updateLife = currentLife - 1 ;

    setTextElementValueById('current-life',updateLife);

    if(updateLife ===0 ){
        console.log('game is over');
        gameOver();
    }



//------------------------------------------------------------------------------------------------
    // // setp-1 get the current life number
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // //setp - 2 reduce the life count
    // const newLife = currentLife - 1;
    // //display the  upaate life cound
    // currentLifeElement.innerText = newLife;
   }

}
//capture keyboard key press
document.addEventListener('keyup',handleKeyButtonPress)



function continueGame(){
// step-1 genrate a random alphabet
 const alphabet = getRandomAlphabet();
 console.log(alphabet);

//   set randomly generate alphabet to the screen (show it)
 const currentAlphabetElement = document.getElementById('current-alphabet');
 currentAlphabetElement.innerText = alphabet;

// set background color
setBackgroundColorById(alphabet);

}




function playOnclik(){
    // hide everthing show only the playground

    hideElementById('play-home');
    hideElementById('final-score');
    showElementById('play-ground');

    //rest  score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    //update final score
    // 1.get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    // clear the last selected alphabet heighlight

    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}