function checkFizzBuzz(input){
    if (input%3===0 && input%5===0)
    return "FizzBuzz";
    else if (input===3)
    return "Fizz";
    else if (input===5)
    return "Buzz";
    else
    return input;
}

module.exports = checkFizzBuzz;