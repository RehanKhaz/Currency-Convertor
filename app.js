import inquirer from "inquirer";
console.log(` Welcome to the Currency Convertor -- Rehan Khan `);
let exchange_rates = {
    USD: 1,
    INR: 83.3,
    PKR: 280,
    CNY: 7.23,
    BDT: 109.6,
    AFN: 71.23,
    MYR: 4.75,
    JPY: 151.61,
    AUD: 1.52, // Australia
};
let askUser = await inquirer.prompt([
    {
        name: "ConvertingFrom",
        message: "Select the currency to convert from ",
        type: "list",
        choices: ["USD", "IND", "PKR", "CNY", "BDT", "AFN", "MYR", "JPY", "AUD"],
    },
    {
        name: "ConvertingTo",
        message: "Select the currency to convert to ",
        type: "list",
        choices: ["USD", "IND", "PKR", "CNY", "BDT", "AFN", "MYR", "JPY", "AUD"],
    },
    {
        name: "userAmount",
        type: "input",
        message: "Enter the amount you want to convert to",
    },
]);
// accessing the object from the askUser
let convertFrom = exchange_rates[askUser.ConvertingFrom];
let convertTo = exchange_rates[askUser.ConvertingTo];
let userAmount = askUser.userAmount;
// Formula to calculate the currency is :
let convertedAmount = (userAmount / convertFrom) * convertTo;
console.log(` Your converted amount from ${askUser.ConvertingFrom} to ${askUser.ConvertingTo} is ${convertedAmount.toFixed(2)} `);
