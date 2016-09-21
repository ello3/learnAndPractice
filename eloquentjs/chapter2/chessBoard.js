/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

var size = 8;
var board = " ";

for (i = 1; i <= size; i++){
	
	for (j = 1; j <= size; j++){
		j%2 == 0 ? board += " " : board += "#" 
	}

	i%2 == 1 ? board += "\n" : board += "\n " 

} // my solution 1

console.log(board)
console.log(board.length)

console.log("===========================") // separator

