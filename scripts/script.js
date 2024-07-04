// import grid components
import { gridCard } from "../components/cardGrid.js";
// import header function
import { createHeader } from "../components/header.js";
// import header Array
import { headerArr } from "./headerArr.js";
// create header component
createHeader(headerArr.home);

// get data from local storage
const diaryArr = JSON.parse(localStorage.getItem("dairyArr")) || [];
// function to display card
const displayCard = () => {
  const cardContainer = document.querySelector(".card-container");
  // map over the array in the card-container
  diaryArr
    .map((dairy, index) => {
      cardContainer.innerHTML += gridCard(
        index,
        dairy.title,
        dairy.description,
        dairy.date
      );
    })
    .join(" ");
};
displayCard();

// function to display card header
const displayHeader = () => {

  const cardHeader = document.querySelector(".card-header");
  const diaryArr = JSON.parse(localStorage.getItem("dairyArr")) || [];
  
  // map through the array to find the length
  const cardLength = diaryArr.length;
  // map over the array in the card-container
  const newHeader = document.createElement("h1");
  
  

  if (cardLength == 1) {
    // return 1 for the length of the array
    // create new h1 element in the html
    // set the text content of the new h1 element
    newHeader.textContent = `You have ${cardLength} diary entry`;
    // append the new h1 element to the card-header
  } 
  else if (cardLength > 1) {
    newHeader.textContent = `You have ${cardLength} diary entries`;
  } else {
    newHeader.textContent = `Keep Tracks of your busy life.
    Create a Diary Entry Here`;
}
cardHeader.appendChild(newHeader);
};
displayHeader();
