const Employee = require('../lib/Employee');
const { expect } = require('@jest/globals');

test('creates employee object', () => {
    const employee = new Employee('Test Employee','Test ID','Test Email');

    expect(employee.name).toBe('Test Employee');
    expect(employee.id).toBe('Test ID');
    expect(employee.email).toBe('Test Email');
});

test('get employee name', () => {
    const employee = new Employee('Test Employee','Test ID','Test Email');

    expect(employee.getName()).toBe('Test Employee');
});

test('get employee id', () => {
    const employee = new Employee('Test Employee','Test ID','Test Email');

    expect(employee.getId()).toBe('Test ID');
});

test('get employee email', () => {
    const employee = new Employee('Test Employee','Test ID','Test Email');

    expect(employee.getEmail()).toBe('Test Email');
});

test('get employee role', () => {
    const employee = new Employee('Test Employee','Test ID','Test Email');

    expect(employee.getRole()).toBe('Employee');
});