//Flight booking

function getFullname (firstname,surname,useFormalName){
	if (useFormalName === true) { return console.log( "Lord " + firstname + " " + surname);}
	else  {return console.log( firstname + " " + surname);}
};
getFullname("Muhammad","zak",true)

// let fullname1 = getFullname("Muhammad","zak");
// let fullname2 = getFullname("Muhammad","zak");
 

//Event application
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function getEventWeekday(eventDay){
 
const todayIs = new Date();
const day = (eventDay - todayIs.getDate()) % 7;
 return (weekDays[day]);
}
console.log(getEventWeekday(5))


//Weather wear

function wearOnWeather(temperature){
    if(temperature >= 25){
        return "don't wear your jacket"
    }
    else if(temperature >= 15){
        return "wear your jacket"
    }
    else{
        return 'it is too cold'
    }
}
console.log(wearOnWeather(50));

//student manager
