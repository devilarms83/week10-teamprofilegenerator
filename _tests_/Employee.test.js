// using Employee constructor 
const { italic } = require('colors');
const Employee = require('../lib/Employee');

// test Employee object
describe('Employee', () => {
    it('has basic entries in its parameters', () => {
        const employee = new Employee('Albert', 83, 'al@bert.com');

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    })
})

// gets id from getId() 
test('gets employee name', () => {
    const employee = new Employee('Albert', 83, 'al@bert.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Albert', 83, 'al@bert.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Albert', 83, 'al@bert.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Albert', 83, 'al@bert.com');

    expect(employee.getRole()).toEqual("Employee");
}); 