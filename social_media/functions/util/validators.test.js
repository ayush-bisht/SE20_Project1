
const { hasNoWhiteSpace, isEmail, isNotEmpty, passwordLength, validateSignupData, validateLoginData } = require('./validators')

test('white space check true', () => {
  expect(hasNoWhiteSpace("hello ")).toEqual(true);
});
test('white space check false', () => {
    expect(hasNoWhiteSpace("hello")).toEqual(false);
  });

test('email check true', () => {
    expect(isEmail("asd@gmail.com")).toEqual(true);
});
test('email check false', () => {
    expect(isEmail("asdw")).toEqual(false);
});
