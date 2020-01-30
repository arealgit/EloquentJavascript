//This code will add the numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 and will log their sum which should equal 55

let total = 0;
let count = 1;

while(count <= 10) {
    total += count;
    count += 1;
}

console.log(total);


//The sum and range operations can shorten this code

console.log(sum(range(1,10)));


//BONUS instructions to add these numbers in binary

/*

00110001 00000000 00000000  //Store the number 0 in memory location 0
00110001 00000001 00000001  //Store the number 1 in memory location 1
00110011 00000001 00000010  //Store the value of memory location 1 in memory location 2
01010001 00001011 00000010  //Subtract the number 11 from the value in memory location 2
00100010 00000010 00001000  //If the value of memory location 2 is hte number 0, continue with instruction 9
01000011 00000001 00000000  //Add the value of memory location 1 to memory location 0
01000001 00000001 00000001  //Add the number 1 to the value of memory location 1
00010000 00000010 00000000  //Continue with instruction 3
01100010 00000000 00000000  //Output the value of memory location 0

*/
