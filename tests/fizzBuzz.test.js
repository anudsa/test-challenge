const checkFizzBuzz = require('../fizzBuzz.js');

test('Regresa FizzBuzz si es múltiplo de 3 y 5',()=>{
    expect(checkFizzBuzz(15)).toBe("FizzBuzz");
});

test('Regresa Fizz si es múltiplo de 3',()=>{
    expect(checkFizzBuzz(3)).toBe("Fizz");
});

test('Regresa Buzz si es múltiplo de 5',()=>{
    expect(checkFizzBuzz(5)).toBe("Buzz");
});

test('Regresa el número si no es múltiplo',()=>{
    expect(checkFizzBuzz(1)).toBe(1);
});