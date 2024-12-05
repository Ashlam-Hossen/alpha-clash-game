
// common function use for hidden elements
// hide function
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

 // show function
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// common function use  for background
//---------------------------------------------------------------------
// set color function
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}


function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// common function use for score board

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementTextValue = element.innerText;
    const elementValue = parseInt (elementTextValue);
    return elementValue;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}



function setTextElementValueById(elementId,value){
   const element = document.getElementById(elementId);
   element.innerText = value;
}










function getRandomAlphabet(){
   // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets =  alphabetString.split('');
    //   console.log(alphabets);



    //  get a random index between 0-25

    const randomNumber = Math.random() *25;
    const index = Math.round(randomNumber);


     const alphabet = alphabets[index];
    //  console.log(index,alphabet);

     return alphabet;
}