/*
Base64 Numeric Translator
-------------------------
Our standard numbering system is (Base 10). That includes 0 through 9. Binary is (Base 2), only 1’s and 0’s. And Hexadecimal is (Base 16) (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F). A hexadecimal “F” has a (Base 10) value of 15. (Base 64) has 64 individual characters which translate in value in (Base 10) from between 0 to 63.

Write a method that will convert a string from (Base 64) to it's (Base 10) integer value.

The (Base 64) characters from least to greatest will be

ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
Where 'A' is equal to 0 and '/' is equal to 63.

Just as in standard (Base 10) when you get to the highest individual integer 9 the next number adds an additional place and starts at the beginning 10; so also (Base 64) when you get to the 63rd digit '/' and the next number adds an additional place and starts at the beginning "BA".

Example:

base64_to_base10("/") # => 63
base64_to_base10("BA") # => 64
base64_to_base10("BB") # => 65
base64_to_base10("BC") # => 66
Write a method base64_to_base10 that will take a string (Base 64) number and output it's (Base 10) value as an integer.
*/
function base64_to_base10(str) {
   base64Array = { "A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9,"K":10,"L":11,"M":12,"N":13,"O":14,"P":15,"Q":16,"R":17,"S":18,"T":19,"U":20,"V":21,"W":22,"X":23,"Y":24,"Z":25,"a":26,"b":27,"c":28,"d":29,"e":30,"f":31,"g":32,"h":33,"i":34,"j":35,"k":36,"l":37,"m":38,"n":39,"o":40,"p":41,"q":42,"r":43,"s":44,"t":45,"u":46,"v":47,"w":48,"x":49,"y":50,"z":51,"0":52,"1":53,"2":54,"3":55,"4":56,"5":57,"6":58,"7":59,"8":60,"9":61,"+":62,"/":63};
   i = 1;
   //res = 0;
   res = base64Array[str[0]];
   while(i<str.length) {
     console.log(i);
     res = res*64 + base64Array[str[i]];
     i++;
   }
   console.log(res);
   return res;
}
