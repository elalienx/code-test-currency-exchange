const bills = [1, 2, 4];
// const bills = [2, 3, 4];

function checkChange(bills, change) {
  let copyOfBills = [...bills]; // make a copy of the bills because the next method called pop() is destructive
  let currentBill = copyOfBills.pop(); // Gets the last item of the bills array. Example first $4, then $2, then $1
  let ammount = 0; // The ammount of money we are giving to the customer. Example tree $1 bills and one $2 bill equals $5
  let minBills = 0; // How many bills we are giving to the customer. Example tree $1 bills and one $2 bill = four bills

  while (currentBill !== undefined) {
    if (ammount === change) {
      break;
    }

    if (ammount < change) {
      ammount += currentBill;
      minBills++;
    } else {
      ammount -= currentBill; // remove the last bill because we went overboard
      minBills--; // we need to take this bill that was too high from our count
      currentBill = copyOfBills.pop(); // move to the next bill, because the previous one was too high
    }
  }

  // In case we did not find a match
  if (ammount !== change) {
    minBills = -1;
  }

  return minBills;
}

console.log("check change $4:", checkChange(bills, 4));
console.log("check change $5:", checkChange(bills, 5));
console.log("check change $11:", checkChange(bills, 11));
