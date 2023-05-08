function randomLetter(string) {
  return string.charAt(Math.floor(Math.random() * string.length));
}

// export function generatePassword(length = 10) {
//   const lowercase = 'abcdefghijklmnopqrstuvwxyz';
//   const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const numbers = '0123456789';
//   const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=\\';

//   let randomString = '';
//   randomString += randomLetter(lowercase);
//   randomString += randomLetter(uppercase);
//   randomString += randomLetter(numbers);
//   randomString += randomLetter(symbols);

//   const characters = lowercase + uppercase + numbers + symbols;
//   for (let i = 0; i < length - 4; i++) {
//     randomString += randomLetter(characters);
//   }

//   return randomString;
// }

export function generatePassword(length, options) {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_-+=[]{}\\|;:\'",.<>/?';
  let validChars = '';

  if (options.uppercase) validChars += uppercaseChars;
  if (options.lowercase) validChars += lowercaseChars;
  if (options.numbers) validChars += numberChars;
  if (options.symbols) validChars += symbolChars;

  let password = '';

  for (let i = 0; i < length; i++) {
    password += randomLetter(validChars);
  }

  return password;
}
