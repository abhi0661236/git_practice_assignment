// improve the code to check whether given string is a palindrome or not

let originalString = "racecar", reverseString="";

for(let i = originalString.length; i>0; j++){
    reverseString += originalString[j];
}

if(originalString === reverseString) console.log(`The given string "${originalString}" is a palindrome.`);
else console.log(`The given string "${originalString}" is not a palindrome.`);