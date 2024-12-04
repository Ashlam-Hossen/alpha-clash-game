// function playOnclik(){
// //   step - hide the home screen.to hide the screen and the class hidden to the home section
// const playHomeScreen = document.getElementById('play-home');
// playHomeScreen.classList.add('hidden');



// // step-2 show the playground

// const playgroundSection = document.getElementById('play-ground');
// // console.log(playgroundSection.classList);
//  playgroundSection.classList.remove('hidden');
// }

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
    hideElementById('play-home');
    showElementById('play-ground');
    continueGame();
}