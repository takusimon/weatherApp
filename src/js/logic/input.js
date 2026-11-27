export function isInputValid(userInput) {
  const pattern = new RegExp(/^[a-zA-Z\s]+,\s*[a-zA-Z\s]+$/);
  return pattern.test(userInput);
}

export function cleanUserInput(userInput) {
  return userInput
    .trim()
    .split(",")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
}
