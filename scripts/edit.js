
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
createHeader(headerArr.edit)
// create subheader component
createSubHeader(subHeaderArr.edit)
class EditCard extends HTMLElement{
    constructor(){
        super();
    }
    // call back function when element is connected to dom
    connectedCallback(){
        this.innerHTML = card('input title here', 'Update', 'Cancel');
        this.setUpEventListener();
    }
    setUpEventListener(){
        let location = window.location.href.split('?');
        const index = location[1];
        // get data from local storage
        let entries = JSON.parse(localStorage.getItem('dairyArr'));
        // get the title, description, date with the entries index
        let entry = entries[index];

        // populate the form fields with the existing entry data
        document.querySelector('#description').value = entry.description;
        document.querySelector('#title').value = entry.title;
        document.querySelector('#date').value = entry.date;
        // update button 
        const updateBtn = document.querySelector('#saveBtn');
        // click on update button to update the entry
        updateBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            const description = document.querySelector('#description').value;
            const title = document.querySelector('#title').value;
            const date = document.querySelector('#date').value;
            // get the title, description, date with the entries index
            entries[index] = {title,description,date};
            // set local storage
            localStorage.setItem('dairyArr', JSON.stringify(entries));
            window.location.href = '../index.html';
        });
        // cancel button 
        const cancelBtn = document.querySelector('#clearBtn');
        cancelBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            // click on cancel button to redirect to home page
            window.location.href = '../index.html';
        });

    }
};
// define a custom name 
customElements.define('edit-card', EditCard);




