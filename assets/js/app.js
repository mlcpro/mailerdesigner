import MailerDesigner from "./components/MailerDesigner";

new MailerDesigner('mailer-designer')

let dragged;
document.addEventListener("dragstart", function( event ) {
    dragged = event.target;
    event.dataTransfer.dropEffect = "move";
}, false);

document.addEventListener("dragover", function( event ) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}, false);

document.addEventListener("dragenter", function( event ) {
   
    if(event.target.type === 'email') {
        event.target.style.borderLeft = '1.5px solid #c9f5ff'
    }
    
}, false);

document.addEventListener("dragleave", function( event ) {
   
    if(event.target.type === 'email') {
        event.target.style.borderLeft = 'none'
    }

}, false);

document.addEventListener("drop", function( event ) {
    event.preventDefault();

    if(event.target.type === 'email') {
        event.target.style.borderLeft = 'none'
        for(const node of event.target.parentElement.querySelectorAll('span.md-badge')) {
            if(node.innerText === dragged.innerText) {
                node.remove();
            }
        }
        event.target.insertAdjacentElement('beforebegin',dragged)
    }

}, false);