/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(firstNumber, secondNumber) {
    this.sum = firstNumber + secondNumber
    this.subtraction = firstNumber - secondNumber
    this.multiplication = firstNumber * secondNumber
    this.division = firstNumber / secondNumber
}

let newCalculator = new Calculator(10, 20)
console.log(newCalculator.sum)
console.log(newCalculator.subtraction)
console.log(newCalculator.multiplication)
console.log(newCalculator.division)
