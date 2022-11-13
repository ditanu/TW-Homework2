tokens = [
  {
    tokenName: "Ditanuu",
  },
  {
    tokenName: "Alexandru",
  },
  {
    tokenName: "Basescu",
  },
];

// console.log(typeof false);
// console.log(Object.keys(tokens[2]).length);

// tokens.forEach((element) => {
//   console.log(element);
//   if (
//     element.hasOwnProperty("tokenName") &&
//     Object.keys(element).length === 1 &&
//     typeof element.tokenName === "string"
//   ) {
//     console.log("da");
//   } else {
//     console.log("nu");
//   }
// });

tokens.forEach((element) => {
  if (
    !element.hasOwnProperty("tokenName") ||
    Object.keys(element).length !== 1 ||
    !(typeof element.tokenName === "string")
  ) {
    throw new Error("Invalid array format");
  }
});

// for (let i = 0; i < tokens.length; i++) {
//   if (
//     !tokens[i].hasOwnProperty("tokenName") ||
//     Object.keys(tokens[i]).length !== 1
//   ) {
//     throw new Error("Invalid array format");
//   }
// }

// input = 20;
// if (typeof input !== "string") {
//   throw new Error(`Input should be a string`);
// }

input = "yessssssir ...";
if (input.includes("...")) {
  tokens.forEach((element) => {
    input = input.replace("...", `\${${element.tokenName}}`);
  });
  console.log(input);
}
