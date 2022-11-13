function addTokens(input, tokens) {
  if (typeof input !== "string") {
    throw new Error("Invalid input");
  }

  if (input.length < 6) {
    throw new Error(`Input should have at least 6 characters`);
  }

  tokens.forEach((element) => {
    if (
      !element.hasOwnProperty("tokenName") ||
      Object.keys(element).length !== 1 ||
      !(typeof element.tokenName === "string")
    ) {
      throw new Error("Invalid array format");
    }
  });

  if (!input.includes("...")) {
    return input;
  }

  if (input.includes("...")) {
    tokens.forEach((element) => {
      input = input.replace("...", `\${${element.tokenName}}`);
    });
    return input;
  }
}

const app = {
  addTokens: addTokens,
};

module.exports = app;
