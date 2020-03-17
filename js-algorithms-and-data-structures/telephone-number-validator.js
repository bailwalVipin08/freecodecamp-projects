/******** US Telephone Number Validator Using Regular Expresssions **********/

function telephoneCheck(str) {
  if (str.length > 10) {
    if (str[0] !== 1 && !str.includes('-') && !str.includes(' ')) {
      return false
    }
  }
  let regEx = /^1?\s?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}/gi
  return regEx.test(str)
}
