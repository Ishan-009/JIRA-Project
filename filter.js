const colorBoxes = document.querySelectorAll(".color_boxes");
const colorInput = document.querySelectorAll(".color");
//loop -> add eventlistner to color boxes
const colors = ["pink", "blue", "green", "black"];
for (let i = 0; i < colorBoxes.length; i++) {
  colorBoxes[i].addEventListener("click", filterTickets);
}
function filterTickets(e) {
  // lock functionality

  if (isLocked == false) {
    alert("First Lock it");
    return;
  }

  // click -> first click -> clicked
  let elem = e.currentTarget;
  // alert(elem);
  // second time click -> clicked class
  let secondClass = elem.classList[1];

  if (secondClass == "clicked") {
    elem.classList.remove("clicked");
    showAll(); // here it will show all items on clicking second time
  } else {
    // remove click from every class
    //if -> elem has class-> remove
    //does not have leave the class
    for (let i = 0; i < colorBoxes.length; i++) {
      colorBoxes[i].classList.remove("clicked");
    }

    // we implemented for loop and removed clicked class from every boxes because when we click on the boxes we add clicked to every boxes , so if we want to implement this feature on the other color boxes then we have to remove the clicked all classes and then add clicked class to the tarrget color box although we are removing the individual clicked class in if statement.

    // very imp point
    // also these for loop helps us to implement that if click in the other box then the previous box should remove clicked class and only target box should have clicked classs

    elem.classList.add("clicked");

    // show only my color //
    let childElem = elem.children; // getting children of the clicked element which is color box class in index.html
    let clickedColor = childElem[0].classList[1];
    console.log("clicked color:", clickedColor);
    // getting color value from the boxes , by the getting the color class in box
    showOnlyMyColor(clickedColor); // show filtered items on first click
  }

  function showOnlyMyColor(clickedColor) {
    //get all the ticket
    let allTickets = document.querySelectorAll(".ticket");
    //check there headings
    for (let i = 0; i < allTickets.length; i++) {
      let header = allTickets[i].children[0];

      let headerColor = header.classList[1];

      // console.log(headerColor);
      //  here we are getting the ticket-header 1st index class list element , which is the color class, we will use this to filter or get the sametype of tickets for filtering.
      // storing the header color
      // console.log(clickedColor);

      // if clicked color and header color of ticket matches then show the ticket
      // else hide the tickets
      if (headerColor == clickedColor) {
        // show
        allTickets[i].style.display = "block";
      } else {
        //hide
        allTickets[i].style.display = "none";
      }
    }
    //show only those whosse color matches your color.
  }
}
