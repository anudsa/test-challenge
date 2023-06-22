const factorial=require('../factorial');

test('El factorial para 1 es 1',()=>{
    expect(factorial(1)).toBe(1);
});
test('El factorial para 0 es 1',()=>{
    expect(factorial(0)).toBe(1);
});
test('El factorial para 4 es 24',()=>{
    expect(factorial(4)).toBe(24);
});