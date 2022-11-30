// add one event listener
const students = [];

const clickHandler = (e) => {
  // changes background color of body
  if (e.target.textContent === "Change Background Color") {
    changeBG();
  } else if (e.target.textContent === "Submit") {
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
  // we should store the data that user entered before clearing the inputs
  let studentObj = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    progName: progNameInput.value,
  };
  // save studentObj somewhere (array or database)
  students.push(studentObj);
  // clear inputs
  firstNameInput.value = "";
  lastNameInput.value = "";
  progNameInput.value = "";

  updateLists(studentObj);
};

const updateLists = (student) => {
  // get reference to the ul elements
  const CITList = document.querySelector(".CIT");
  const CSTList = document.querySelector(".CST");
  // create an li element
  const listItem = document.createElement("li");
  // set the li element's textContent
  listItem.textContent = `${student.firstName} ${student.lastName}`;
  // set the li element to the appropriate ul based on program name
  if (student.progName === "CIT") { //student's program is CIT
    CITList.appendChild(listItem);
  } else if (student.progName === "CST") { //student's program is CST
    CSTList.appendChild(listItem);
  }
};

document.body.addEventListener("click", clickHandler);
