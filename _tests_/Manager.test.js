// using Manager constructor 
const Manager = require('../lib/Manager');

// test Manager object
describe('Manager', () => {
    it('has basic entries in its parameters', () => {
        const manager = new Manager('Albert', 83, 'al@bert.com', 3);

        expect(manager.name).toEqual(expect.any(String));
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(expect.any(String));
        expect(manager.officeNumber).toEqual(expect.any(Number));
    })
})

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Albert', 83, 'al@bert.com', 3);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Albert', 83, 'al@bert.com', 3);

    expect(manager.getRole()).toEqual("Manager");
}); 