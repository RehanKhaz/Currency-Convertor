#! /usr/bin/env node

import inquirer from "inquirer"
console.log(` Welcome to the Currency Convertor -- Rehan Khan `);
let exchange_rates: any = {
  USD: 1, // United States
  INR: 83.3, // India
  PKR: 280, // Pakistan
  CNY: 7.23, // China
  BDT: 109.6, // Bangladesh
  AFN: 71.23, // Afghanistan
  MYR: 4.75, // Malaysia
  JPY: 151.61, // Japan
  AUD: 1.52, // Australia
};

let askUser = await inquirer.prompt([
  {
    name: "ConvertingFrom",
    message: "Select the currency to convert from ",
    type: "list",
    choices: ["USD", "INR", "PKR", "CNY", "BDT", "AFN", "MYR", "JPY", "AUD"],
  },

  {
    name: "ConvertingTo",
    message: "Select the currency to convert to ",
    type: "list",
    choices: ["USD", "INR", "PKR", "CNY", "BDT", "AFN", "MYR", "JPY", "AUD"],
  },

  {
    name: "userAmount",
    type: "input",
    message: "Enter the amount you want to convert to:",
  },
]);

// accessing the object from the askUser
let convertFrom = exchange_rates[askUser.ConvertingFrom];
let convertTo = exchange_rates[askUser.ConvertingTo];
let userAmount = askUser.userAmount;

// Formula to calculate the currency is :
let convertedAmount = (userAmount / convertFrom) * convertTo;
console.log(
  ` Your converted amount from ${askUser.ConvertingFrom} to ${
    askUser.ConvertingTo
  } is ${convertedAmount} `
);
