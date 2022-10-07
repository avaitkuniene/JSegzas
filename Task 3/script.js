/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.getElementById('btn').addEventListener('click', showData)

function showData() {
    let body = document.getElementById('output')
    body.innerHTML = ' ';

    fetch(ENDPOINT)
        .then(x => x.json())
        .then(data => {

        for (let i = 0; i < data.length; i++) {
            let avatarUrl = document.createElement('a')
            avatarUrl.style.color = 'green'
            avatarUrl.innerText += '\n' + data[i].avatar_url
            avatarUrl.href = data[i].avatar_url
            avatarUrl.target = '_blank'

            let loginInfo = document.createElement('h5')
            loginInfo.innerText += '\n' + data[i].login
            loginInfo.style.color = 'red'
    
            body.appendChild(loginInfo)
            body.appendChild(avatarUrl)
        }
    })
}