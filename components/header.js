// function to generate the HTML for header section
const header = ( title, subTitle, img) => {
    return `
    <header class="header">
        <div>
            <h1 class="title">${title}</h1>
            ${subTitle ? `<h3 class="sub-title">${subTitle}</h3>` : ''}
        </div>
        <div class="profile-pic">
            <img src="${img}">
        </div>
    </header>
    `
}
// function to create and define a custom element
function createHeader (arr){
    // custom element class definition
    class Header extends HTMLElement {
        // callback function when the element is connected to the DOM
        connectedCallback() {
            this.innerHTML = header(arr.title, arr.subTitle, arr.img);
        }
    }
    // define the custom element with the specified name
    customElements.define('header-component', Header)
}
// export createHeader
export { createHeader }