function number(n){
// function to process the number
    if ((n % 3 == 0) && (n % 5 == 0)){
        //checks if the number is divisible by 5 and 3
        console.log('Fizz Buzz');
        // prints out Fizz Buzz if the number is divisible by 5 and 3
    }
    else if(n % 3 == 0){
        // checks if the the number is divisible by 3
        console.log('Fizz');
        // prints out Fizz if the number is divisible by 3
    }

    while(n != 0){
        // the loop iterates to print out the number n and every value below it up until 0
        console.log(n);
        // prints out the current value of n
        n = n - 1;
        // subtracts n by 1
        }

}
// calls the function number and passes it the number 15
number(12);