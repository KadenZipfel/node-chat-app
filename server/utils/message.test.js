var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Kaden';
    var text = 'Some message';
    var message = generateMessage(from, text);
    
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var latitude = 123;
    var longitude = 321;
    var from = 'Admin';
    var message = generateLocationMessage(from, latitude, longitude);
    var url = 'https://www.google.com/maps?q=123,321';
    
    expect(message).toInclude({from, url});
  });
});