/*
Challenge

Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
Sample Test Cases
Input:"coderbyte"
Output:"etybredoc"

Input:"I Love Code"
Output:"edoC evoL I"

*/

function FirstReverse(str) { 

var stringReverse = "";

 	 for (var i = str.length - 1; i >= 0; i--){

 	 	stringReverse += str[i];

  }

  return console.log(stringReverse); 
         
}
   
// keep this function call here 
FirstReverse("1234567890");                            






