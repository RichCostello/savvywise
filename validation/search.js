const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateSearchInput(data) {
  let errors = {};

  if (isEmpty(data.query)) {
    errors.query = "At least submit one search";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
