const Engineer = require('../lib/Engineer');
const { expect } = require('@jest/globals');

test('creates engineer object', () => {
    const engineer = new Engineer('Test Employee','Test ID','Test Email');

    expect(engineer.name).toBe('Test Employee');
    expect(engineer.id).toBe('Test ID');
    expect(engineer.email).toBe('Test Email');
});

test('get engineer name', () => {
    const engineer = new Engineer('Test Employee','Test ID','Test Email');

    expect(engineer.getName()).toBe('Test Employee');
});

test('get engineer id', () => {
    const engineer = new Engineer('Test Employee','Test ID','Test Email');

    expect(engineer.getId()).toBe('Test ID');
});

test('get engineer email', () => {
    const engineer = new Engineer('Test Employee','Test ID','Test Email');

    expect(engineer.getEmail()).toBe('Test Email');
});

test('get engineer github', () => {
    const engineer = new Engineer('Test Employee','Test ID','Test Email');
    engineer.github = 'test-github';

    expect(engineer.github).toBe('test-github');
});

test('get engineer role', () => {
    const engineer = new Engineer('Test Employee','Test ID','Test Email');

    expect(engineer.getRole()).toBe('Engineer');
});

test('get engineer github URL', () => {
    const engineer = new Engineer('Test Employee','Test ID','Test Email');
    engineer.github = 'test-github';

    expect(engineer.getGithub()).toBe('https://github.com/test-github');
});