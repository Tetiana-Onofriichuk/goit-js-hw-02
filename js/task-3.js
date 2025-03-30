"use strict";

function checkForSpam(message) {
  message = message.toLowerCase();
  return message.includes("spam") || message.includes("sale");
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

function getSubscriptionPrice(type) {
  switch (type) {
    case "starter":
      return 0;
      break;
    case "professional":
      return 20 + " dollars";
      break;
    case "organization":
      return 50;
      break;
    default:
      return "Invalid subscription type!";
  }
}
