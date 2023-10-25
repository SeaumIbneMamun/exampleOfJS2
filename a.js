var data = ['name' , 834, true, "Gpu"];

console.log(data);


var numbers = [9,4,6,7,5,3];

var numbers = [9,8,7,6,5,4,3,2];
numbers [4] = 'Four'

console.log(numbers);


var numbers = [9,8,7,6,5,4,3,2];
var index = numbers.indexOf(4);

console.log(index);







var numbers2 = [14, 25, 12, 46, 3, 45, 78, 71, 53];
var result = numbers2.indexOf(999);

console.log(result);





var numbers2 = [14, 25, 12, 46, 3, 45, 78, 71, 53];
var result2 = numbers2[3];
console.log(result2);




var games = ['Gta', 'AmongUs', 'Minecraft', 'Asphalt'];
games.push('Wolfstein');

games.push('Cities Skylines', "Pokemon United");

games.unshift('Metro');

games.splice(4, 0, 'Surf');

games [2] = 'Dinosaur';


games.pop();


console.log(games);





// this > that
// this < that
// this == that
// this <= that
// this >= that
// this != that







var junkFoodHealthyLevel = 34;
var vegitableHealthyLevel = 60;

if (junkFoodHealthyLevel < vegitableHealthyLevel) {
    console.log('Vegitable is healthy to take');
}





var isFoodAvailable = false;

if (isFoodAvailable == true){
    console.log('Take it from freezer.');
}else{
    console.log("Don't give me.");
}






var age = 17;

if (age >= 17){
    console.log('You are allowed');
}
else{
    console.log('You are not allowed.');
}









var hasCar = true;
var hasMoney = true;
var hasJob = true;

if (hasCar == false && hasMoney == true && hasJob == false){
    console.log('You will get reward');
}else{
    console.log('You are not eligible');
}

if (hasCar == true && hasMoney == true && hasJob == true){
    console.log('You will get reward');
}else{
    console.log('You are not eligible');
}










var taka = 10;
var car = 45;
var roll = 5;
var cook = 15;

if(taka >= cook){
    console.log('I will drink cook.');
}
else if (taka >= roll){
    console.log('I will eat Roll.');
}













var num = 50;
var food = 40
if (num >= 10) {
    console.log('Num is more than 10'); 
    if (num > food) {
        console.log('Food is good.');
    }  
} else {
    console.log('Num is less than 10.');
}



