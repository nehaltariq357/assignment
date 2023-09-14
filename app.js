// QUESTION #01

let studentNamesLiteral = [];



// QUESTION #02

let studentNamesObject = new Array();


// QUESTION #03

let stringsArray = ["ONE", "TWO", "THREE"];



// QUESTION #04

let numbersArray = [1, 2, 3, 4, 5];



// QUESTION #05

let booleanArray = [true, false, true];



// QUESTION #06


let mixedArray = [1, "apple", true, 3.14];



// QUESTION #07


let qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (let i = 0; i < qualificationsArray.length; i++) {
  document.write("<li>" + qualificationsArray[i] + "</li>");
}
document.write("</ul>");



// QUESTION #08


let studentNames = ["Student 1", "Student 2", "Student 3"];
var studentScores = [450, 380, 490];


let totalMarks = 500;
let percentages = [];

for (let i = 0; i < studentScores.length; i++) {
  let percentage = (studentScores[i] / totalMarks) * 100;
  percentages.push(percentage.toFixed(2)); // Round to 2 decimal places
}


for (let i = 0; i < studentNames.length; i++) {
  console.log(
    studentNames[i] + " scored " + studentScores[i] + " out of " + totalMarks + " with a percentage of " + percentages[i] + "%"
  );
}



// QUESTION #09







// QUESTION #10


let studentScores = [75, 90, 60, 85, 70];


studentScores.sort(function(a, b) {
  return a - b;
});


console.log("Student Scores in Ascending Order: " + studentScores.join(", "));




// QUESTION #11

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

let selectedCities = [];

selectedCities = cities.slice(0, 3);

console.log("Selected Cities: " + selectedCities.join(", "));




// QUESTION #012


var arr = ["This ", " is ", " my ", " cat"];

var singleString = arr.join("");

console.log(singleString);


// QUESTION #13



let fifoArray = [];


fifoArray.push("Value 1");
fifoArray.push("Value 2");
fifoArray.push("Value 3");
let firstValue = fifoArray.shift();
let secondValue = fifoArray.shift();
let thirdValue = fifoArray.shift();
console.log("First Value: " + firstValue);
console.log("Second Value: " + secondValue);
console.log("Third Value: " + thirdValue);



// QUESTION #14


let lifoArray = [];


lifoArray.push("Value 1");
lifoArray.push("Value 2");
lifoArray.push("Value 3");
let lastValue = lifoArray.pop();
let secondLastValue = lifoArray.pop();
let thirdLastValue = lifoArray.pop();
console.log("Last Value: " + lastValue);
console.log("Second Last Value: " + secondLastValue);
console.log("Third Last Value: " + thirdLastValue);



// QUESTION #15



var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
var dropdownHtml = "<select>";
for (var i = 0; i < phoneManufacturers.length; i++) {
  dropdownHtml += "<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>";
}
dropdownHtml += "</select>";
document.write(dropdownHtml);







