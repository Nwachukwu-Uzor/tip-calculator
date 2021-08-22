const btns = document.querySelectorAll(".btn");
const custom = document.querySelector("#custom");
const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const totalPersonPerson = document.querySelector("#total-per-person");
const tipPersonPerson = document.querySelector("#tip-per-person");
const resetBtn = document.querySelector(".reset");

let percentValue = 0;
let billValue = 0;
let noOfPeople = 0;

const calculateTip = (total, percent) => {
  return total * (percent / 100);
};

const perPersonAmount = (amount, persons) => {
  return amount / persons;
};

const manipulateDom = (amount, persons, percent) => {
  const tip = calculateTip(amount, percent);
  console.log(persons);
  if (tip && persons) {
    tipPersonPerson.innerText = perPersonAmount(tip, persons).toFixed(2);
    totalPersonPerson.innerText = perPersonAmount(amount, persons).toFixed(2);
  }
};

const checkDomManipulate = () => {
  if (percentValue && noOfPeople && billValue) {
    manipulateDom(billValue, noOfPeople, percentValue);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
      percentValue = JSON.parse(btn.dataset.value);
      console.log(percentValue);
      checkDomManipulate();
    });
  });

  custom.addEventListener("change", () => {
    percentValue = custom.value;
    checkDomManipulate();
  });

  bill.addEventListener("change", () => {
    billValue = bill.value;
    if (!billValue) {
      return;
    }
    checkDomManipulate();
  });

  people.addEventListener("change", () => {
    noOfPeople = people.value;
    if (!noOfPeople) {
      return;
    }
    checkDomManipulate();
  });

  resetBtn.addEventListener("click", () => {
    bill.value = "";
    people.value = "";
    btns.forEach((btn) => btn.classList.remove("active"));
    percentValue = 0;

    tipPersonPerson.innerText = "0.00";
    totalPersonPerson.innerText = "0.00";
  });
});
