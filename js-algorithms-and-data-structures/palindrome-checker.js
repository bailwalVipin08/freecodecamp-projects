function palindrome(str) {
  const re = /[a-zA-Z0-9]/g
  const str2 = str.match(re)
  console.log(str2)
  if (str2.join(',').toLowerCase() === str2.reverse().join(',').toLowerCase()) return true
  else return false
}
