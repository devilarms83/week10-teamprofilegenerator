// using Intern constructor 
const Intern = require('../lib/Intern');

// test Intern object
describe('Intern', () => {
    it('has basic entries in its parameters', () => {
        const intern = new Intern('Albert', 83, 'al@bert.com', 'NU');

        expect(intern.name).toEqual(expect.any(String));
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(expect.any(String));
        expect(intern.school).toEqual(expect.any(String));
    })
})

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Albert', 83, 'al@bert.com', 'NU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Albert', 83, 'al@bert.com', 'NU');

    expect(intern.getRole()).toEqual("Intern");
}); 