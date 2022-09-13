// improve the code to check if a number is prime or not.

let num = 11, isPrime = true;

for(let i = num-1; i>=2; i--){
    if(num%i == 0){
        isPrime = false;
        break;
    }
}

if(isPrime) {console.log(`The number ${num} is a prime number`)}
else{console.log(`The number ${num} is not a prime number`)} 