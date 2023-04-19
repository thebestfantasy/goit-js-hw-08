import throttle from 'lodash.throttle';

const refs = {
    emailInput: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
    form: document.querySelector(".feedback-form"),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onFormInput, 500));

localMessage();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset(); 
    localStorage.removeItem(STORAGE_KEY); 
}

function onFormInput() {
    const formInp = { email: refs.emailInput.value, message: refs.textarea.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInp));
}

function localMessage() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        refs.emailInput.value = savedMessage.email ?? '';
        refs.textarea.value = savedMessage.message ?? '';
    }
}




