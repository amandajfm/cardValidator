/* eslint-disable no-undef */

const chai = require('chai');
const expect = chai.expect;
const cardValidator = require('../lib/index');

describe('card lib', () => {
  it('Should return true to correct credit card number 4539 4648 1428 2158', () => {
    expect(cardValidator.cardValidator('4539 4648 1428 2158')).to.equal(true);
  });

  it('Should return true to correct credit card numbers with special characters', () => {
    expect(cardValidator.cardValidator('4539.4648.1428.2158')).to.equal(true);
  });   
    
  it('Should return true to correct credit card numbers without spaces', () => {
    expect(cardValidator.cardValidator('4539464814282158')).to.equal(true);
  });   
    
  it('Should return false to invalid card number 0000 4648 1428 2158', () => {
    expect(cardValidator.cardValidator('0000 4648 1428 2158')).to.equal(false);
  });

  it('Should return false to invalid repeated numbers, such as 0000 0000 0000 0000 ', () => {
    expect(cardValidator.cardValidator('0000 0000 0000 0000')).to.equal(false);
  });

  it('Should return false to letters', () => {
    expect(cardValidator.cardValidator('Amanda')).to.equal(false);
  });

  it('Should return false to and empty string', () => {
    expect(cardValidator.cardValidator('')).to.equal(false);
  });

  it('Should return false to a number lesser than 16 digits', () => {
    expect(cardValidator.cardValidator('4539 4648 1428')).to.equal(false);
  });
});
