import { userRegistrationRule } from "./userRegistrationRule";

const submitBtn = this.window.document.getElementById('submitBtn');
const userNameInput = this.window.document.getElementById('username');
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let userNameInputValue = userNameInput.value.trim();
    if(!userNameInputValue || userNameInputValue.length > 10) {
        alert('This username is not allowed!');
        userNameInput.value = '';
    }
    console.log(userRegistrationRule.userNameInput);
});