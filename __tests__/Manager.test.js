const Manager = require('../lib/Manager');
const { expect } = require('@jest/globals');

test('creates manager object', () => {
    const manager = new Manager('Test Employee','Test ID','Test Email');

    expect(manager.name).toBe('Test Employee');
    expect(manager.id).toBe('Test ID');
    expect(manager.email).toBe('Test Email');
});

test('get manager name', () => {
    const manager = new Manager('Test Employee','Test ID','Test Email');

    expect(manager.getName()).toBe('Test Employee');
});

test('get manager id', () => {
    const manager = new Manager('Test Employee','Test ID','Test Email');

    expect(manager.getId()).toBe('Test ID');
});

test('get manager email', () => {
    const manager = new Manager('Test Employee','Test ID','Test Email');

    expect(manager.getEmail()).toBe('Test Email');
});

test('get manager office number', () => {
    const manager = new Manager('Test Employee','Test ID','Test Email');
    manager.officeNumber = '123-456-7890';

    expect(manager.officeNumber).toBe('123-456-7890');
});

test('get manager role', () => {
    const manager = new Manager('Test Employee','Test ID','Test Email');

    expect(manager.getRole()).toBe('Manager');
});