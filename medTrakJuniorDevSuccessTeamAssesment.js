const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];

// Function number one is a for loop that can identify if a number is prime or not //
function primes(num) {
// Checks if number is less than 1 or 0 because neg numbers are not prime and returns false // 
    if (num <= 1) {
        return false;
    } else {
        for (let i = 2; i < num; i++) {
// If the number or array numbers are greater than 1 then the for loop checks to see if that number is divisible by i=2 //
            if (num %  i == 0) {
// If the number is divisible by more than 2 numbers than it is not a prime number and returns false //                
                return false; 
            }
        }
// If the number is only divisible by itself and 1 than it is a prime number and returns true // 
        return true;
    }
};
// I then grabbed the prime numbers from the array using the filter method // 
let primeNumbers = numArr.filter(primes);

// Then sorted the filtered prime numbers array using the sort method and printed them to the console // 
const sortedPrimeNumbers = primeNumbers.sort();
console.log("These are the sorted prime numbers");
console.log(sortedPrimeNumbers);



// ==================================================================== //


// Function number two is a function to identify prime factors from our array of numbers //
// I chose to use the for each method to apply the function to all numbers in our array //
numArr.forEach(function factors(item, index, array){
// Standard for loop that pushes all factors of our individual numbers into the factors array // 
    let factorsArr = [];
    if (item <=1) {
        return false;
    } else {
        for (let index = 1; index < array.length; index++) {
            if (item % index == 0) {
                factorsArr.push(index)
            }
        }
   }
// I then used the prime function built above and filtered out the prime factors for each number in our array //  
   let primeFactors = factorsArr.filter(primes);
   console.log("These are the prime factors for" + " " + item);
   console.log(primeFactors);
});













