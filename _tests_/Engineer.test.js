// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// test Engineer object
describe('Engineer', () => {
    it('has basic entries in its parameters', () => {
        const engineer = new Engineer('Albert', 83, 'al@bert.com', 'abautista83');

        expect(engineer.name).toEqual(expect.any(String));
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toEqual(expect.any(String));
        expect(engineer.github).toEqual(expect.any(String));
    })
})

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Albert', 83, 'al@bert.com', 'abautista83');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Albert', 83, 'al@bert.com', 'abautista83');

    expect(engineer.getRole()).toEqual("Engineer");
});