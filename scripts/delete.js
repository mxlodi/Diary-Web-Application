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
createHeader(headerArr.delete)
// create subheader component
createSubHeader(subHeaderArr.delete)
// custom element class
class DeleteCard extends HTMLElement{

    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = card("input title here", "Delete", "Cancel");
        this.setUpEventListener();
    }
    setUpEventListener(){
        // get index from url
        const index = window.location.href.split('?')[1];
        // fetching entries from local storage
        let entries = JSON.parse(localStorage.getItem('dairyArr')) || [];
        // call id to use 
        const description = document.querySelector('#description');
        const title = document.querySelector('#title');
        const date = document.querySelector('#date');
        // get the title, description, date with the entries index
        let entry = entries[index];
        // populate the form fields with the existing entry data
        // retrieves the specific diary entry from the array using the index extracted from the url
        // the entry now holds the diary entry object that will be put into the form
        description.value = entry.description;
        title.value = entry.title;
        date.value = entry.date;
        // access the property of the entry object, which is the text that was originally entered for this diary entry
        const cancelBtn = document.querySelector('#clearBtn');
        const deleteBtn = document.querySelector('#saveBtn');
        // delete  
        deleteBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            entries = entries.filter((_,n)=>{
                return n!= index;
            })
            // when the delete button is clicked, the entry at the index is removed from the array in local storage
            localStorage.setItem('dairyArr', JSON.stringify(entries)) || [];
            window.location.href = '../index.html';
        })
        // cancel button 
        cancelBtn.addEventListener('click', (e)=>{
            // when clicks on the cancel button, the current values of the form fields (description, title, date) are retrieved.
            e.preventDefault();
            const description = document.querySelector('#description').value;
            const title = document.querySelector('#title').value;
            const date = document.querySelector('#date').value;
            // access the diary entry at the specified index
            entries[index] = {title,description,date};
            localStorage.setItem('dairyArr', JSON.stringify(entries)) || [];
            window.location.href = '../index.html';
        })
    }
}
// define name for the custom element
customElements.define("delete-card", DeleteCard);


