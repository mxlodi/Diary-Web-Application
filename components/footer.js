// function to generate the HTML for footer section
const footer = ()=>{
    return `
    <footer class="footer">
        <div class="footer-content">
            <!-- contact us -->
            <div class="contact-us">
                <h1>Contact Us</h1>
                <div>
                    <img src="../assets/icons/facebook.svg" alt="facebook icon">
                    <img src="../assets/icons/instagram.svg" alt="instagram icon">
                    <img src="../assets/icons/twitter.svg" alt="twitter icon">
                </div>
            </div>
            <!-- reserved and logo -->
            <div class="reserved">
                <a href="../index.html"><img src="../assets/icons/smashit.svg" alt="Logo"></a>
                <p>© SMASH IT All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    `
};
// custom element class
class Footer extends HTMLElement {
     // constructor function to initialize the custom element
    constructor() {
        super();
    } 
    // callback function when the element is connected to the DOM
    connectedCallback (){
        this.innerHTML = footer();
    }
};
// define a custom name 
customElements.define('footer-component', Footer);
