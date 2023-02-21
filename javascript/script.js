"use strict";
const adviceNumber = document.querySelector('.advice-number');
const adviceContent = document.querySelector('.advice-content');
const dice = document.querySelector('.dice');

const advice = async function(){
    try {
        const url = await fetch('https://api.adviceslip.com/advice');
        const advice = await url.json();
        displayAdvice(advice);
    }catch (e) {
        displayError("error");
    }
}
const displayAdvice = function(advice){
    adviceNumber.innerText = `ADVICE #${advice.slip.id}`;
    adviceContent.innerText = `"${advice.slip.advice}"`;
}
const displayError = function (error) {
    adviceContent.innerText = `"${error}"`;
}

dice.addEventListener('click',advice);

advice();