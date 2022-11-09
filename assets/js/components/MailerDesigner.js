export default class MailerDesigner extends HTMLFormElement {
    connectedCallback () {
        this.addEventListener('keydown', this.onKeyDown)
        this.addEventListener('focusout', this.onFocus)
    }

    onKeyDown(e) {
        let target = e.target
        let code = e.which

        if(code === 32 || code === 13) {
            e.preventDefault();

            this.insertElement(target);
        }

        if(target.type === 'email' && !target.value && code === 8) {
            if(target.previousElementSibling.classList.contains('md-badge')) {
                target.previousElementSibling.remove()
            }
        }
    }

    onFocus(e) {
        let target = e.target

        this.insertElement(target)
    }

    insertElement(elt) {
        if(elt.type === 'email') {
            if(elt.value && this.validateEmail(elt)) {
                elt.insertAdjacentHTML('beforebegin', 
                `
                <span class="md-badge" draggable="true">${elt.value.toLowerCase()}</span>
                `
                )
                elt.value = ''
            }
        }
    }

    validateEmail(target) {
        const emails = target.parentElement.querySelectorAll('.md-badge')

        for(const email of emails) {
            if(email.innerText === target.value.toLowerCase()) return false
        }

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(target.value)) {
            return true
        }
        return false
    }

}