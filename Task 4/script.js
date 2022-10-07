/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then(x => x.json())
    .then(data => {

        let body = document.getElementById('output')

        for (let i = 0; i < data.length; i++) {

            let card = document.createElement('div')
            card.id = 'card'
            card.style.backgroundColor = 'yellow'
            card.style.border = '5px solid red'

            let cardBody = document.createElement('div')
            cardBody.id = 'card-body'

            let carBrand = document.createElement('h5')
            carBrand.style.color = 'blue'
            carBrand.style.justifyItems = 'center'
            carBrand.style.padding = '10px'
            carBrand.style.textTransform = "uppercase";
            carBrand.innerText = data[i].brand

            let carModels = document.createElement('li')
            carModels.style.color = 'green'
            carModels.innerText = data[i].models

            card.appendChild(cardBody)
            cardBody.appendChild(carBrand)
            cardBody.appendChild(carModels)
            body.appendChild(card)    
        }
    })