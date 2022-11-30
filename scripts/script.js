// add one event listener
const students = [];

const clickHandler = (e) => {
  if (e.target.textContent === "Change Background Color") {
    changeBG();
  } else if ((e.target.id = "submit")) {
    submitHandler();
  }
};

const changeBG = () => {
  document.body.classList.toggle("blueBG");
};
const submitHandler = () => {
  // get what user typed in the inputs .value
  // references to the inputs.
  const firstNameInput = document.querySelector("#firstname"); //getElementById("firstname")
  const lastNameInput = document.querySelector("#lastname");
  const progNameInput = document.querySelector("#progname");
  firstNameInput.value = "";
  lastNameInput.value = "";
  progNameInput.value = "";
};
document.body.addEventListener("click", clickHandler);
