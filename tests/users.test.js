// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');


// Make a test to verify if the method getUser(id) works correctly

test('checks if the correct user is retrieved',()=>{
    const data = 
    {
        id: 3,
        username: "goosemotionless",
        email: "dotmeheart@outlook.com",
        password: "12345abcde"
    };

    expect(getUser(3)).toEqual(data);
});

// Verify any data of the resulting object you want

test('testing if getUser(id) works by giving id=3, it should ouput a 3 id.',()=>{
    expect(getUser(3).id).toBe(3);
});