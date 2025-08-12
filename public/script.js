let age;
let maxAge;
let numPerDay;

let unc = prompt("What is your age? ", "age");
let max = prompt("WHat is your maximum age? ", "maxAge");
let num = prompt("How many times do you eat your snack per day? ", "numPerDay");
if (confirm('Is 'unc' really your age?')){
    console.log("unc");
}
else{
    console.log("liar!");
}
if (confirm('Is 'max' really your age?')){
    console.log("healthy");
}
else{
    console.log("eat veggies");
}
if (confirm('Is 'num' really your age?')){
    console.log("calm down!");
}
else{
    console.log("I knew it!");
}
let totalRequired = (num * 365) * (max - unc);

document.write("You will need " + totalRequired + " to last until you ripe old age of " + max);