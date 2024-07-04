// import header function
import {createHeader} from "../components/header.js";
// import header Array
import { headerArr } from "./headerArr.js";
// import card component
import { card } from "../components/cards.js";
// import subheader array
import { subHeaderArr } from "./subHeaderArr.js";
// import subheader function
import { createSubHeader } from "../components/subHeader.js";

// create header component
createHeader(headerArr.create)
// create subheader component
createSubHeader (subHeaderArr.create)

// custom elements class
class CreateCard extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // create card with input placeholders and save and clear buttons
        this.innerHTML = card("your title", "Save", "Clear");
        this.setUpEventListener();
    }
    // function to set up event listeners
    setUpEventListener() {
        const clearBtn = document.querySelector('#clearBtn');
        const formCreate = document.querySelector('.form-container');
        // submit event listener
        formCreate.addEventListener('submit', (e) => {
            e.preventDefault();
            // call id to use
            const description = document.querySelector('#description').value;
            const title = document.querySelector('#title').value;
            const date = document.querySelector('#date').value;
            // get the current entries from local storage, or initialize an empty array if it doesn't exist yet
            const entries = JSON.parse(localStorage.getItem('dairyArr')) || [];
            entries.push({ title, description, date });
            // storing updated data in local storage
            // if the key already exists, it updates the value; if it does not, it creates a new key-value pair
            localStorage.setItem('dairyArr', JSON.stringify(entries));
            formCreate.reset();
            window.location.href = '../index.html';
        });
         // Clear button event listener
         clearBtn.addEventListener('click', () => {
            document.querySelector('#title').value = '';
            document.querySelector('#description').value = '';
            document.querySelector('#date').value = '';
        });
    }
}
// define a custom name
customElements.define("create-card", CreateCard);
