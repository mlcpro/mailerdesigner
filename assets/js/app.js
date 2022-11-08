import MailerDesigner from "./components/MailerDesigner";

customElements.define('mailer-designer', MailerDesigner, { extends: 'form' });

let dragged;
document.addEventListener("dragstart", function( event ) {
    dragged = event.target;
    event.dataTransfer.dropEffect = "move";
}, false);

document.addEventListener("dragover", function( event ) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}, false);

document.addEventListener("drop", function( event ) {
    event.preventDefault();

    if(event.target.type === 'email') {
        event.target.insertAdjacentElement('beforebegin',dragged)
    }

}, false);