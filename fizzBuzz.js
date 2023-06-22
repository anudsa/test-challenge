function checkFizzBuzz(input){
    if (input%3===0 && input%5===0)
    console.log("FizzBuzz");
    else if (input===3)
    console.log("Fizz");
    else if (input===5)
    console.log("Buzz");
    else
        console.log(input);
}
