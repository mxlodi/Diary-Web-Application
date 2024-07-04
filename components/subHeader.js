// function to generate the HTML for the sub header section
const subHeader = ( title ) => {
    return `
    <div class="sub-header">
        <div class="sub-header-content">
            <h1>${title}</h1>
            <a href="../index.html"><img src="../assets/icons/arrow.svg" alt=""></a>
        </div>
    </div>  `
}
// function to create and define a custom eleme
function createSubHeader (arr){
    // custom element class definition
    class SubHeader extends HTMLElement {
        // callback function when the element is connected to the DOM
        connectedCallback() {
            this.innerHTML = subHeader(arr.title);
        }
    }
    // define the custom element with the specified name
    customElements.define('subheader-component', SubHeader)
}
// export createSubHeader
export { createSubHeader }