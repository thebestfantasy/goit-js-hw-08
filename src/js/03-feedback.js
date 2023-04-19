import throttle from 'lodash.throttle';

const refs = {
    emailInput: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
    form: document.querySelector(".feedback-form"),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onTextAreaInput, 500));
// refs.form.addEventListener('input', evt => {
//     formData[evt.target.name] = evt.target.value;
//     console.log(formData);
// })

localMessage();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset(); 
    localStorage.removeItem(STORAGE_KEY); 
}

function onTextAreaInput() {
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




