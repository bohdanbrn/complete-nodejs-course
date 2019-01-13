const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('should asunc add two numbers', (done) => {
    utils.assyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});


it('should square number', () => {
    let res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
});

it('should assync square number', (done) => {
    utils.assyncSquare(3, (square) => {
        expect(square).toBe(9).toBeA('number');
        done();
    });
});

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName with proper values', () => {
    let user = {
        location: 'Lviv',
        age: 23
    }
    let res = utils.setName(user, 'Bohdan Baran');

    expect(res).toInclude({
        firstName: 'Bohdan',
        lastName: 'Baran'
    }).toBeA('object');
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'Bohdan'}).toEqual({name: 'Bohdan'});
//     // expect([2,3,4]).toExclude(5);
//     expect({
//         name: "Bohdan",
//         age: 23,
//         location: 'Philadelphia',
//     }).toExclude({
//         age: 25
//     })
// });
