/**
  INSTRUCTIONS:
  In this exercise you will be writing code to help a freelancer communicate with his clients about the prices of certain projects. You will write a few utility functions to quickly calculate the costs for the clients.

  1. Calculate the day rate given an hourly rate
  A client contacts the freelancer to enquire about his rates. The freelancer explains that he works 8 hours a day. However, the freelancer knows only his hourly rates for the project. Help him estimate a day rate given an hourly rate.
  The day rate does not need to be rounded or changed to a "fixed" precision.

  2. Calculate the number of workdays given a fixed budget
  Another day, a project manager offers the freelancer to work on a project with a fixed budget. Given the fixed budget and the freelancer's hourly rate, help him calculate the number of days he would work until the budget is exhausted. The result must be rounded down to the nearest whole number.

  3. Calculate the discounted rate for large projects
  Often, the freelancer's clients hire him for projects spanning over multiple months. In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate. Every month has 22 billable days. Help him estimate his cost for such projects, given an hourly rate, the number of days the project spans, and a monthly discount rate. The discount is always passed as a number, where 42% becomes 0.42. The result must be rounded up to the nearest whole number.
*/

const DAILY_WORKING_TIME = 8;
const WORKING_DAYS_BILLED_IN_MONTH = 22;

// Task 1 - The day rate, given a rate per hour
function dayRate(ratePerHour) {
  return DAILY_WORKING_TIME * ratePerHour;
}

console.log(dayRate(89));

// Task 2 - Calculates the number of days in a budget, rounded down
function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

console.log(daysInBudget(20000, 89));

// Task 3 - Calculates the discounted rate for large projects, rounded up
function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let monthsWithADiscount = Math.floor(numDays / WORKING_DAYS_BILLED_IN_MONTH);
  let daysWithADiscount = monthsWithADiscount * WORKING_DAYS_BILLED_IN_MONTH;
  let priceForDaysWithADiscount = dayRate(ratePerHour) * daysWithADiscount * (1 - discount);
  let priceForDaysWithoutDiscount = dayRate(ratePerHour) * (numDays - daysWithADiscount);
  return Math.ceil(priceForDaysWithoutDiscount + priceForDaysWithADiscount);
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42));
