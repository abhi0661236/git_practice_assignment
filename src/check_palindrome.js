// improve the code to check whether given string is a palindrome or not

let originalString = "racecar", reverseString="";

for(let i = originalString.length-1; i>=0; i--){
    reverseString += originalString[i];
}

if(originalString === reverseString){ console.log(`The given string "${originalString}" is a palindrome.`)}
else {console.log(`The given string "${originalString}" is not a palindrome.`)}