
const total = require('./total.js');

describe('total', () => {
test('should obscure all but the last four digits of a 12-digit card', () => {
    expect(total('123456789012')).toBe('********9012');
});

test('should obscure all but the last four digits of a 16-digit card', () => {
    expect(total('1234567890123456')).toBe('************3456');
});

test('should obscure all but the last four digits of a 13-digit card', () => {
    expect(total('1234567890123')).toBe('*********0123');
});

test('should obscure all but the last four digits of a 14-digit card', () => {
    expect(total('01234567890123')).toBe('**********0123');
});

test('should obscure all but the last four digits of a 15-digit card', () => {
    expect(total('123456789012345')).toBe('***********2345');
});

test('should return "Invalid Credit Card" for a card that is too short', () => {
    expect(total('123')).toBe('Invalid Credit Card');
});

test('should return "Invalid Credit Card" for a card that is too long', () => {
    expect(total('12345678901234567')).toBe('Invalid Credit Card');
});
});
