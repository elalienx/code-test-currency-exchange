module.exports = class Solution {
  constructor(api) {
    this.api = api;
    console.log('Press run code to see this in the console!')
  }
  
  // My helper methods
  /**
   * @returns number[]
   */
  getBills() {
    const numBills = this.api.getNumBills(); // array.length = 3
    let bills = [];
    
    for (let index = 0; index < numBills; index++){
      const bill = this.api.getBill(index);
      
      bills.push(bill);
    }
    
    return bills;
  }
  
  /**
   * @parameter bills:number[]
   * 
   * @returns number
   */
  getSumOfBills(bills){
    let initialValue = 0;
    
    const sumOfBills = bills.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 
      initialValue
    );
    
    return sumOfBills;
  }
  
  /**
   * Note: This one is obsolete. A good algorith done on "checkIfChangeIsInsideBills()" should cover this case as well. As the other method should use something related to the modulus operator and do modulus 4 === 1 
  */
  
  /**
   * @parameter change: number
   * @parameter bills: number[]
   * 
   * @returns Boolean
   */
  checkIfChangeIsInsideBills(change,bills) {
    console.log("checkIfChangeIsInsideBills() change, bills", change, bills);
    
    let result = bills.includes(change);
    console.log("result", result);
    
    return result;
  }
  
  /**
   * @parameter change: number
   * @parameter bills: number[]
   * 
   * @returns number
   */
  checkIfChangeIsSumOfBills(change, bills) {
    let result = -1;
    let accumulator = 0;
    
    for (let index = 0; index < change; index++) {
      accumulator += index;
      
      if (accumulator === change) {
        console.log("We found the minium neccesary, stop the loop!");
        break;
      }
    }
    
    // safeguard
    if (accumulator > change) { console.log("We did not found a match, return -1"); }
    
    return result;
  }

  // Code test methods (bussiness requirements)
  /**
   * Sub-Task 1: Returns the minimum amount unreachable using at most one
   * bill of each denomination.
   * 
   * 
   * @return {number (integer)}
   */
  smallestUnreachable() {
    const bills = this.getBills();
    const sumOfBills = this.getSumOfBills(bills)
    const smallestUnreachable = sumOfBills + 1;

    return smallestUnreachable;
  }

  /**
   * Sub-Task 2: Returns the minimum number of bills needed to give a
   * customer their change when purchasing an item.
   * 
   * 
   * @return {number (integer)}
   */
  minBills() {
    const bills = this.getBills(); // [$1, $2, $4]
    const price = this.api.getPrice(); // $4
    const payment = this.api.getPayment(); // $8
    const change = payment - price; // also $4
    
    const isChangeinsideBill = this.checkIfChangeIsInsideBills(change, bills); // true/false
    const changeSumOfBills = this.checkIfChangeIsSumOfBills(change, bills); // number/-1
    let minBills = -1; // set the bad value as the default
    

    if (isChangeinsideBill) {
      minBills = 1;
    }
    else{
      minBills = changeSumOfBills;
    }
    
    return minBills;
  }
}