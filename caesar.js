
const upper = []; //array of all uppercase letters
var x = 65
for (i = 1; i < 27; i++) {
    upper.push(String.fromCharCode(x));
    x++
}

const lower = []; //array of all lowercase letters
var y = 97
for (j = 1; j < 27; j++) {
    lower.push(String.fromCharCode(y));
    y++
}

const upperChar = []; //array of uppercase character codes
var a = 65;
for (k = 1; k < 27; k++) {
    upperChar.push(a);
    a++;
}

const lowerChar = []; //array of lowercase character codes
var b = 97
for (l = 1; l < 27; l++) {
    lowerChar.push(b);
    b++;
}

const indexes = []; //array of indexes 0-25
var c = 0
for (m = 1; m < 27; m++) {
    indexes.push(c);
    c++;
}

const caesar = function(string, n) {
    var output = ''
    if (n > 26) { //if shift number (n) long, divide by 26 and set n to remainder
        r = n%26;
        n = r }
      
    for (var i = 0; i < string.length; i++) { //loops through input string, assigns each index cc

        var cc = string.charCodeAt(i);
        cc = (Number(cc));
        var ccn = cc + n //set cnn as variable to make if statements simpler below (bad idea?)

        if (cc >= 65 && cc <= 90) { //checks if input character code is uppercase

            /*/////////checks if shifted number is over limits of uppercase letters
             if so, changes cc to correct character code from code array*/
                    if ((ccn) > 90 && (ccn < 97)) {   //^^^^^^^^****maybe the problem is here with super long n
                        var ccOut = (ccn);             
                        var newIndex = ((ccOut - 90) - 1);
                        cc = upperChar[newIndex];
                        output += String.fromCharCode(cc);
                    } else if ((ccn) < 65) { //checks if shifted number is below limits of uppercase letters
                        var ccOut = (ccn); 
                        var newIndex = (26 - (65 - ccOut)); 
                        cc = upperChar[newIndex]; 
                        output += String.fromCharCode(cc);
                    } else {
                        output += String.fromCharCode(ccn); //if shifted number within limits, add to string
                    }
            }
    else if (cc >= 97 && cc <= 122) { //checks if input character code is uppercase


                    if (ccn > 122) {           
                        var ccOut = (ccn);
                        var newIndex = ((ccOut - 122) - 1);
                        cc = lowerChar[newIndex];
                        output += String.fromCharCode(cc);
                    } else if ((ccn) < 97 && (ccn > 90)) {
                        var ccOut = (ccn); 
                        var newIndex = (26 - (97 - ccOut)); 
                        cc = lowerChar[newIndex]; 
                        output += String.fromCharCode(cc);
                    } else {
                        output += String.fromCharCode(ccn); 
                    }
                    }
    else {
        output += String.fromCharCode(cc); //if cc not a-z or A-Z, don't change and add to string
    }
}
    return output;
}
//module.exports = caesar
console.log(caesar('Hello, World!', 5))
