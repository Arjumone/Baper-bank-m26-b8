// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){

// step-2: get the deposit amount from the deposit input field
// for input field use .value to the value inside the input field
const depositInput = document.getElementById('input-deposit')
const nemDepositAmountString = depositInput.value;
const newDepositAmount = parseFloat(nemDepositAmountString);
// console.log(typeof newDepositAmount);

// step-3: clear the input deposit field
depositInput.value= '';

// step-3: get the current deposit total
// for non input ( element other than input,textarea) use innerText to get the text
const deposit = document.getElementById('deposit')
const previousDepositTotalString = deposit.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);
// console.log(typeof previousDepositTotal);

// step-4: add numbers to set the total deposit
const currentDepositTotal =previousDepositTotal + newDepositAmount;

deposit.innerText = currentDepositTotal;

// step-5: get the current balance total
const totalBalance = document.getElementById('total-balance');
// console.log(totalBalance);
const previousBalanceTotalString = totalBalance.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step-6: calculate current total balance
const currentTotalBalance = previousBalanceTotal + newDepositAmount;
// set the balance total
totalBalance.innerText = currentTotalBalance;


})