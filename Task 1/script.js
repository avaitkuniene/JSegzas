/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector('form').addEventListener('submit', convertKG);
let information = document.querySelector('input[type=text]')

function convertKG(event) {
    let body = document.getElementById('output')
    body.innerHTML = ' '

    event.preventDefault()
    let kilograms = Number(information.value)

    let naujiSvoriai = document.createElement('div')
    naujiSvoriai.style.backgroundColor = 'pink'

    let pounds = document.createElement('h5')
    pounds.style.color = 'red'
    pounds.innerHTML = 'Pounds (lb): ' + kilograms * 2.2046

    let grams = document.createElement('h5')
    grams.style.color = 'green'
    grams.innerHTML = 'Grams (g): ' + kilograms / 0.0010000

    let ounces = document.createElement('h5')
    ounces.style.color = 'blue'
    ounces.innerHTML = 'Ounces (oz): ' + kilograms * 35.274

    naujiSvoriai.appendChild(pounds)
    naujiSvoriai.appendChild(grams)
    naujiSvoriai.appendChild(ounces)
    body.appendChild(naujiSvoriai)
}
