const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Bohdan';
        let text = 'Hello World';
        let message = generateMessage(from, text);

        expect(message).toMatchObject({from ,text});
        expect(typeof message.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        let from = 'Bohdan';
        let lat = '49.839';
        let lng = '24.029';
        let url = `https://www.google.com/maps?q=${lat},${lng}`;
        let message = generateLocationMessage(from, lat, lng);

        expect(message).toMatchObject({from, url});
        expect(typeof message.createdAt).toBe('number');
    });
});
