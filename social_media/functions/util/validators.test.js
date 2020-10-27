
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

test('Empty check true', () => {
    expect(isNotEmpty("  ")).toEqual(true);
});
test('Empty check false', () => {
    expect(isNotEmpty("asdw")).toEqual(false);
});
test('password check true', () => {
    expect(passwordLength("asdas")).toEqual(true);
});
test('password check false', () => {
    expect(passwordLength("qwedafggaa")).toEqual(false);
});

test('signup valid check true', () => {
    const checkdata = {
        email: "asdasd@gmail.com",
        password: "ftyhbvfghnbgh",
        confirmPassword: "ftyhbvfghnbgh",
        handle: "asdasd",
      };
    expect(validateSignupData(checkdata).valid).toEqual(true);
});

test('signup valid check false', () => {
    const checkdata = {
        email: "am",
        password: "ftyhbvfghnbgh",
        confirmPassword: "ftyhbvfghnbgh",
        handle: "asdasd",
      };
    expect(validateSignupData(checkdata).valid).toEqual(false);
});

test('Login valid check true', () => {
    const logindata = {
        email: "asd@gmail.com",
        password: "asdasdasdasd",
      };
    expect(validateLoginData(logindata).valid).toEqual(true);
});
test('Login valid check false', () => {
    const logindata = {
        email: "asdcom ",
        password: "asdasdasdasd",
      };
    expect(validateLoginData(logindata).valid).toEqual(false);
});
