
const isEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const hasNoWhiteSpace = (string) => {
  if (string.trim() === string) return false;
  else return true;
};

const isNotEmpty = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

const passwordLength = (string) => {
  if (string.length > 6) return false;
  else return true;
};


const validateSignupData = (data) => {
  let errors = {};

  if (isNotEmpty(data.email)) {
    errors.email = "Must not be empty";
  } else if (hasNoWhiteSpace(data.email)) {
    errors.email = "Should not contain white spaces";
  } else if (!isEmail(data.email)) {
    errors.email = "Must be a valid email address";
  }

  if (hasNoWhiteSpace(data.password)) errors.password = "Must not be empty";
  if (passwordLength(data.password)) errors.password = "length should be atleast 7";
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Passwords must match";
  if (hasNoWhiteSpace(data.handle)) errors.handle = "Must not be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

const validateLoginData = (data) => {
  let errors = {};

  if (hasNoWhiteSpace(data.email)) errors.email = "Must not be empty";
  if (hasNoWhiteSpace(data.password)) errors.password = "Must not be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

module.exports = { isEmail, hasNoWhiteSpace, isNotEmpty, passwordLength, validateSignupData, validateLoginData };

exports.reduceUserDetails = (data) => {
  let userDetails = {};

  if (!hasNoWhiteSpace(data.bio.trim())) userDetails.bio = data.bio;
  if (!hasNoWhiteSpace(data.website.trim())) {
    // https://website.com
    if (data.website.trim().substring(0, 4) !== "http") {
      userDetails.website = `http://${data.website.trim()}`;
    } else userDetails.website = data.website;
  }
  if (!hasNoWhiteSpace(data.location.trim())) userDetails.location = data.location;

  return userDetails;
};
