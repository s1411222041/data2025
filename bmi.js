const readline = require('readline-sync');


var weight=readline.questionFloat("enter your weight in kg:");
var height=readline.
questionInt("enter your height in cm:");
var bmi=weight/((height/100)**2)


console.log("hellow your bmi is:" + bmi);