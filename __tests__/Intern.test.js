const Intern = require('../lib/Intern');
const { expect } = require('@jest/globals');

test('creates intern object', () => {
    const intern = new Intern('Test Employee','Test ID','Test Email');

    expect(intern.name).toBe('Test Employee');
    expect(intern.id).toBe('Test ID');
    expect(intern.email).toBe('Test Email');
});

test('get intern name', () => {
    const intern = new Intern('Test Employee','Test ID','Test Email');

    expect(intern.getName()).toBe('Test Employee');
});

test('get intern id', () => {
    const intern = new Intern('Test Employee','Test ID','Test Email');

    expect(intern.getId()).toBe('Test ID');
});

test('get intern email', () => {
    const intern = new Intern('Test Employee','Test ID','Test Email');

    expect(intern.getEmail()).toBe('Test Email');
});

test('get intern school', () => {
    const intern = new Intern('Test Employee','Test ID','Test Email');
    intern.school = 'test school';

    expect(intern.school).toBe('test school');
});

test('get intern role', () => {
    const intern = new Intern('Test Employee','Test ID','Test Email');

    expect(intern.getRole()).toBe('Intern');
});

test('return intern school', () => {
    const intern = new Intern('Test Employee','Test ID','Test Email');
    intern.school = 'test school';

    expect(intern.getSchool()).toBe('test school');
});