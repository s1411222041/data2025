const readline = require('readline-sync');


var weight=readline.questionFloat("enter your weight in kg:");
var height=readline.
questionInt("enter your height in cm:");
var bmi=weight/((height/100)**2)

function calculateBMI(weight, height) {
    if (height<50 || height>300) {
        console.log("height should be between 50cm to 300cm");
        return;
    }
    if (weight<10 || weight>500) {
        console.log("weight should be between 10kg to 500kg");
        return;
    }
let bmi=weight/((height/100)**2)

console.log("hellow your bmi is:" + bmi);
}
