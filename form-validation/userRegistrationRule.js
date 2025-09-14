export const userRegistrationRule = {
    userNameInput: {
        required: true,
        minLength: 2,
        maxLength: 10,
        pattern: /^[a-zA-Z\s'-]+$/,
        message: 'User name must be from 2 to 10 characters and only letters, spaces, hyphens, and apostrophes'
    }
};