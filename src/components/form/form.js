
const buttonsArrowDown = Array.from(document.getElementsByClassName('datepicker__button-arrow-down'));

for (let i = 0; i < buttonsArrowDown.length; i++) {
  buttonsArrowDown[i].addEventListener("click", () => {
    buttonsArrowDown[i].classList.add("datepicker-here")
  })
}

const datepickerInputs = document.querySelector('#start');
console.log(datepickerInputs.value);

