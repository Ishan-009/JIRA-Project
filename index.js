const mainElement = document.querySelector(".main");
let addBtn = document.querySelector(".add");

for (let index = 0; index < colorInput.length; index++) {
  colorInput[index].addEventListener("click", colorChange);
}
// when event is executed , the an object named "e" is created in which information regarding the event is stored
// e is the object that is given by the browser upon the event execution
function colorChange(e) {
  // console.log(e);
  // prints e object

  // e.currentTarget -> refers to the element on which event has occured.
  let elem = e.currentTarget;

  // gets array/list of all the classes present on the element
  // element.classList
  let allclasses = elem.classList;

  let color = allclasses[1];
  // refer index.html or see example below
  // <div class="color blue"></div>
  // storing color class inside color elements so that we can get color input so that we can change background color in to that color.

  // console.log(allclasses[1]); gets class on  1st index in array of class list
  // console.log(elem, " ", allclasses);
  // mainElement.style.backgroundColor = color;
}

// console.log("uuidv4", uuidv4());

///creation of tickets
// When we click plus icon ticket will be created

addBtn.addEventListener("click", function () {
  if (isLocked == true) {
    alert("first unlock it");
    return;
  }
  //create a ticket
  handleCreation();
});

function handleCreation() {
  // 2. main -> ticket add
  isDelete = false;
  let id = uuidv4();
  // logic creating a box -> it will exist
  createModal(id);
}
function createModal(id) {
  let cColor = "black";
  let modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  modal.innerHTML = `
          <textarea class="contentarea"
          placeholder="Enter some Task"
          ></textarea>
          <div class="pallet_container">
              <div class="pallet_color pink"></div>
              <div class="pallet_color blue"></div>
              <div class="pallet_color green"></div>
              <div class="pallet_color black "></div>
          </div>`;
  mainElement.appendChild(modal);
  // color choose
  let allColors = modal.querySelectorAll(".pallet_color");
  for (let i = 0; i < allColors.length; i++) {
    allColors[i].addEventListener("click", function (e) {
      cColor = allColors[i].classList[1];
    });
  }
  // color code
  modal.addEventListener("keypress", function (e) {
    let key = e.key;
    if (key == "Enter") {
      // get text, color
      let textarea = modal.querySelector("textarea");
      let text = textarea.value;
      // destory;
      modal.remove();
      // return text color
      createTicket(id, cColor, text);
    }
  });
}
function createTicket(id, color, text) {
  let ticket = document.createElement("div");
  ticket.setAttribute("class", "ticket");
  ticket.innerHTML = `
<div class="ticket-header ${color}"></div>
<div class="ticket-content">
  <div class="ticket-id">
      #${id}
  </div>
  <textarea name="">${text}</textarea>
</div>`;
  mainElement.appendChild(ticket);

  // 3. change color
  // header pe click ho -> change the color
  let header = ticket.querySelector(".ticket-header");
  header.addEventListener("click", changeColor);
  // delete
  ticket.addEventListener("click", deleteTicket);
}
// ticket shoudl have some functionality

//change color
// header pe click ho toh color change hoga

// header pe click ho -> change the color

function changeColor(e) {
  if (isLocked == true) {
    alert("first unlock it");
    return;
  }

  let head = e.currentTarget;

  let classes = head.classList;

  let cColor = classes[1];

  // initializing with 1st color

  let cIdx = 0;
  for (let i = 0; i < colors.length; i++) {
    if (cColor == colors[i]) {
      cIdx = i;
      break;
    }
  }
  let nextIdx = (cIdx + 1) % colors.length;
  let nextColor = colors[nextIdx];
  // alert(nextColor);
  classes.remove(cColor);
  classes.add(nextColor);
}

//change background -> color boxes filetering

// how to toggle multiple options

// here we are working on tickets and we have passed clicked color which color boxed clicked input as parameter

// const allBoxes = document.querySelectorAll(".box");

//Delete ticket
function deleteTicket(e) {
  if (isDelete == true && isLocked == false) {
    e.currentTarget.remove();
  }
}
