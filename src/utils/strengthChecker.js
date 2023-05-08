export function strengthChecker(password) {
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*()_+~`|}{[\]:;?><,./-=\\]/.test(password);

  const strength =
    (hasLowercase ? 1 : 0) +
    (hasUppercase ? 1 : 0) +
    (hasNumber ? 1 : 0) +
    (hasSymbol ? 1 : 0) +
    (password.length >= 15 ? 1 : 0);

  return strength - 1;
}
