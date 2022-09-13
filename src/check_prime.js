// improve the code to check if a number is prime or not.

let num = 10, isPrime = true;

for(let i = num-1; i>=0; i--){
    if(10%i == 0){
        isPrime = fasle;
        break;
    }
}

if(isPrime) {console.log(`The number ${num} is a prime number`)}
else{console.log(`The number ${num} is not a prime number`)}