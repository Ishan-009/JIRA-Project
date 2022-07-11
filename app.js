const lock = document.querySelector(".lock");
const unlock = document.querySelector(".unlock");

const deleteBtn = document.querySelector(".delete");

let isDelete = false;
let isLocked = false;
lock.addEventListener("click", lockHelper);
unlock.addEventListener("click", unlockHelper);

deleteBtn.addEventListener("click", deleteHelper);
// functionality

// we are making this helper funciton
function lockHelper(e) {
  //lock -> click
  isLocked = true;
  // edit ticket content disable -> disable
  disableEdit();
}

function unlockHelper(e) {
  isLocked = false;
  showAll(); // display all tickets
  // edit ticket content enable
  enableEdit();
}

function disableEdit() {
  let allTickets = document.querySelectorAll(".ticket");
  //check there headings
  for (let i = 0; i < allTickets.length; i++) {
    let textarea = allTickets[i].querySelector("textarea");
    textarea.setAttribute("readonly", "");
    // set readonly attribute from text area to implement do not edit ticket while locked
  }
}

function enableEdit() {
  //
  //get all the tickets in the page
  let allTickets = document.querySelectorAll(".ticket");

  for (let i = 0; i < allTickets.length; i++) {
    //getting textarea inside ticket
    let textarea = allTickets[i].querySelector("textarea");
    textarea.removeAttribute("readonly", "");
    // set readonly attribute to the textarea to implement enabling edit
  }
}
function showAll() {
  //get all the ticket
  let allTickets = document.querySelectorAll(".ticket");
  //check there headings
  for (let i = 0; i < allTickets.length; i++) {
    allTickets[i].style.display = "block";
  }

  for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].classList.remove("clicked");
  }
}

// on remove/delete button we have added click eventlistener, so everytime we click on the button it goes to helper function and enables and disables delete functionality or say sets true or false for delete

// then we have added a "click" event listener in a ticket, so everytime we click ticket it goes deleteTicket option and checks if isDelete is true and it deltess the ticket

function deleteHelper() {
  // alert("delete helper");
  if (isDelete == false) {
    isDelete = true;
  } else {
    isDelete = false;
  }
}
