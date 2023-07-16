const sum = require('./sum');

// it === test
describe('VALORES', () => {
  it('should return 8 if adding 3 and 5', () => {
    // console.log(expect(sum(3,5)));
    expect(sum(3, 5)).toBe(8);
  });

  it('should return 15 if adding 7 and 8', () => {
    // console.log(expect(sum(3,5)));
    expect(sum(7, 8)).toBe(15);
  });
});

describe('Decimal numbers', () => {
  it('should return 8.33 if adding 3.32 and 5.01', () => {
    expect(sum(3.32, 5.01)).toBe(8.33);
  });
  
  it('should return 15.82 if adding 7.72 and 8.1', () => {
    expect(sum(7.72, 8.1)).toBe(15.82);
  });
});