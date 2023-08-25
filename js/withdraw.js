/**
 * 1. add event handler with the withdraw button
 * 2.get the withdraw amount from the withdraw input field
 * */

// step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2
 const withdrawField = document.getElementById("input-withdraw")
 const newWithDrawAmountString = withdrawField.value;
 const newWithDrawAmount = parseFloat(newWithDrawAmountString);
//  clear the input
 withdrawField.value= '';
 if(isNaN(newWithDrawAmount)){
    alert('please provide a valid number');
    return;
 }


 const withdrawTotal = document.getElementById('withdraw');
 const previousWithdrawTotalString = withdrawTotal.innerText;
 const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

 

const balanceTotal = document.getElementById('total-balance');
const previousBalanceTotalString = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

if(newWithDrawAmount > previousBalanceTotal){
alert('ato taka nai');
return;
}

const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;

  withdrawTotal.innerText= currentWithdrawTotal;

const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
balanceTotal.innerText = newBalanceTotal;


})