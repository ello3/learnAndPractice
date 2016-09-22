function FirstFactorial(num) { 

var temp = num;

for (var i = 1; i <= num - 1; i++){
	
	temp *= i;


}
    return console.log(temp);     
}
   
// keep this function call here 
FirstFactorial(4);                            

