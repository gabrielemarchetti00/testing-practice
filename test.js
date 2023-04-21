import { capitalize, reverseString, calculator, caesarChiper, analyzeArray } from "./functions";

test('from hello to Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('from gabriele to eleirbag', () => {
  expect(reverseString('gabriele')).toBe('eleirbag');
});

test('1 + 2 = 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('5 - 4 = 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('8 / 0 = cant divide by 0', () => {
  expect(calculator.divide(8, 0)).toBe('cant divide by 0');
});

test('5 * 5 = 25', () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test('from abc to bcd', () => {
  expect(caesarChiper('abc', 1)).toBe('bcd');
});

test('from zorro to apssp', () => {
  expect(caesarChiper('zorro', 1)).toBe('apssp');
});

test('from array to object', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({average: 4});
  expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({length: 6});
  expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({min: 1});
  expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({max: 8});
});