/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title
        this.director = director
        this.budget = budget
    }

    wasExpensive() {
        if (this.budget > 100000000) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}

let movieOne = new Movie('Titanic', 'James Cameron', 200000000)
let movieTwo = new Movie('El Mariachi', 'Robert Rodriguez', 7000)

movieOne.wasExpensive()
movieTwo.wasExpensive()