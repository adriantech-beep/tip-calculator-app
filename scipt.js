"use strict";
//FLOW_CHART => 1.bill will be inputed 2.tip percentage will be selected 3.number of people will be inputed to plit the bill
//4.

//=> BILL input *multiplied by (tip percentage); /divided by (number of people); =equal to Tip amount (per person).
//=>tip amount per person will be added to the total tip per person.
////////////////////////////////////////////////////////////////////
const billInput = document.querySelector(".bill-input"); //initial bill value
const peopleInput = document.querySelector(".input-people-count"); //number of people to split the bill

const btnFivePercent = document.querySelector(".btn-five-percent"); //5 percent
const btnTenPercent = document.querySelector(".btn-ten-percent"); //10 percent
const btnFifteenPercent = document.querySelector(".btn-fifteen-percent"); //15 percent
const btnTwentyFivePercent = document.querySelector(".btn-twentyfive-percent"); //25 percent
const btnFiftyPercent = document.querySelector(".btn-fifty-percent"); //50 percent
const customTip = document.querySelector(".custom-percent");
const resetBtn = document.querySelector(".reset-btn");
const displayZero = document.querySelector(".zero");

/////////////////////////////////////////////////////////
//👇//Toatal
let totalAll = 0;
//////////////////////////////////////////////////////
//👇//Initial calculations
const initialInput = function (perCent) {
  let bill = parseFloat(billInput.value);
  let people = parseFloat(peopleInput.value);
  if (isNaN(bill) || isNaN(people)) {
    return "Enter a valid number";
  }
  if (people === 0) {
    displayZero.classList.remove("hidden");
    let zeroAmount = people;
    return zeroAmount;
  } else {
    displayZero.classList.add("hidden");
    let tip = (bill * perCent) / people;
    return tip;
  }
};
////////////////////////////////////////////////
//👇//Tip Calculations

const tipCalculation = function (percentage) {
  const peopleValue = peopleInput.value;
  if (peopleValue === "") {
    displayZero.classList.remove("hidden");
    document.querySelector(".zero").textContent = "Enter a valid number";
  } else {
    let tip = initialInput(percentage);
    document.querySelector(".tip-price").textContent = `$${tip.toFixed(2)}`;
    totalAll += tip;
    document.querySelector(".tip-total").textContent = `$${totalAll.toFixed(
      2
    )}`;
  }
  peopleInput.value = "";
  billInput.value = "";
};

///////////////////////////////////////////////////////////
//👇//Event listeners
btnFivePercent.addEventListener("click", () => tipCalculation(0.05));
btnTenPercent.addEventListener("click", () => tipCalculation(0.1));
btnFifteenPercent.addEventListener("click", () => tipCalculation(0.15));
btnTwentyFivePercent.addEventListener("click", () => tipCalculation(0.25));
btnFiftyPercent.addEventListener("click", () => tipCalculation(0.5));

customTip.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const customPercentage = parseFloat(customTip.value) / 100;
    if (isNaN(customPercentage)) {
      displayZero.classList.remove("hidden");
      document.querySelector(".zero").textContent = "Enter a valid number";
      return;
    }
    tipCalculation(customPercentage);
    customTip.value = "";
  }
});
resetBtn.addEventListener("click", function () {
  document.querySelector(".tip-price").textContent = `$0.00`;
  totalAll = 0;
  document.querySelector(".tip-total").textContent = `$${totalAll.toFixed(2)}`;
  peopleInput.value = "";
  billInput.value = "";
});
