// function to generate the HTML for navbar section
const navbar = ()=> {
    return `
    <nav>
        <div class="logo">
            <a href="../index.html"><img src="../assets/icons/Smash It.svg" alt="Logo"></a>
        </div>
        <div class="right-info">
            <ul>
                <li>Join Us Now</li>
                <li>|</li>
                <ul>Help</ul>
            </ul>
        </div>
    </nav>
    `
}
 // custom element class definition
class Navbar extends HTMLElement {
        constructor (){
        super();
    }
    // callback function when element is connected to DOM
    connectedCallback(){
        this.innerHTML = navbar();
    }
};
// define name for the component to use
customElements.define('navbar-component', Navbar);
