
// Age-ify 

let yearOfBirth = 1999;
let yearFuture = 2027;
let age = "you will be " + (yearFuture - yearOfBirth) + " years old in 2027";
console.log(age)

// Goodboy-Oldboy

let dogYearOfBirth = 2020;
let dogYearFuture = 2027;
let dogYear = "your dog will be " + (dogYearFuture - dogYearOfBirth) + " human years old in 2027";
console.log(dogYear)

// Housey pricey 
let volumeInMeters = 8*10*10;
let gardenSizeInM2 = 100;
let housePrise = volumeInMeters*2.5*1000+gardenSizeInM2*300;
console.log("peter should pay " + housePrise)
volumeInMeters = 5*11*8;
gardenSizeInM2 = 70;
housePrise  = volumeInMeters*2.5*1000+gardenSizeInM2*300;
console.log("julia should pay " + housePrise)

// Ez Namey
let firstWords = ["Luffy","Zoro","Nami","Usopp","Sanji","Robin","Chopper","Franky","Brook","Jimbei"]
let secondWords = ["Luffy2","Zoro2","Nami2","Usopp2","Sanji2","Robin2","Chopper2","Franky2","Brook2","Jimbei2"]
let startupName = firstWords[ Math.floor(Math.random() * 10) + 0] +"  "+ secondWords [Math.floor(Math.random() * 10) + 0];
console.log(startupName)