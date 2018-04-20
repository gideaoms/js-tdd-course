import { expect } from 'chai';
import Fizzbuz from '../src/main';

describe('Main', () => {
  it('should return Fizz when multipe of 3', () => {
    expect(Fizzbuz(3)).to.be.equal('Fizz')
  });
});
