/******************** Completed on Mar 15, 2020 *******************/


function rot13(str) {
  const text = Array.from(str)
  const regex = /^[A-Z]$/
  const decodedResult = text.map(c => {
    if (regex.test(c)) {
      const newCode = c.charCodeAt() + 13
      if (newCode > 90) {
        return String.fromCharCode(newCode - 26)
      } else return String.fromCharCode(newCode)
    } else {
      return c
    }
  })

 return decodedResult.join('')
}

rot13('SERR YBIR?')

