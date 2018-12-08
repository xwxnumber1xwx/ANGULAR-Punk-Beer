import { MaxLengthPipe } from './max-length.pipe';

describe('MaxLengthPipe', () => {
  const pipe = new MaxLengthPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('received String.length = 2 plus 3 (dots ...)', () => {
    expect(pipe.transform("abcdef", 2).length).toEqual(5);
  });

  it('received String.length = 6', () => {
    expect(pipe.transform("abcdef", 6).length).toEqual(6);
  });

  it('received String must have 3 dots if more than limit', () => {
    expect(pipe.transform("abcdef", 2)).toContain('...');
  });

  it('received String must be "ab..."', () => {
    expect(pipe.transform("abcdef", 2)).toMatch('ab...');
  });

  it('received String.length = 103', () => {
    let longText = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    expect(pipe.transform(longText).length).toEqual(103);
  });
});
