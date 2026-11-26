export function isInputValid(userInput) {
  const pattern = new RegExp("^[a-zA-Zs]+,s*[a-zA-Zs]+$");
  return pattern.test(userInput);
}

export function cleanUserInput(userInput) {
  console.log(
    userInput
      .split(",")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()),
  );
}
