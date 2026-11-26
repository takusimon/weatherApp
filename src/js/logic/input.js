function getUserInput() {
        return prompt("Location?");
      }

      function isInputValid(userInput) {
        const pattern = new RegExp("^[a-zA-Z\s]+,\s*[a-zA-Z\s]+$");
        console.log(pattern.test(userInput));
      }

      function cleanUserInput(userInput) {
        console.log(
          userInput
            .split(",")
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()),
        );
      }