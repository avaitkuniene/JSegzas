/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let button = document.getElementById('btn__element')
button.onclick = counter

let show = document.getElementById('btn__state')

let count = 0

function counter() {
    count++
    show.innerHTML = count
}