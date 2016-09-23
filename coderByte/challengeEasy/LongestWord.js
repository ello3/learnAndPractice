function LongestWord(sen) { 

var firstword = "", secondWord = ""; 
var pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]+/;

for (var i = 0; i < sen.length; i++){
	if (!pattern.test(sen[i]))
		firstword += sen[i];
	else console.log(i)
}
   return console.log(firstword)      
}
   
// keep this function call here 
LongestWord("test test test");                            

console.log("====================")

