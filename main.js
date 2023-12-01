// Get the HTML element with the id "password"
const passwordBox = document.getElementById("password");

// Set the desired length for the generated password
const length = 12;

// Define character sets for different types of characters
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ";
const lowerCase = "abcdefghijklmnopqrstuvwxyzæøå";
const number = "0123456789";
const symbols = "!@#¤%&/()[]=?`^*_-:.,;";

// Combine all character sets into a single string
const allChars = upperCase + lowerCase + number + symbols;

// Function to generate a random password
function createPassword() {
    let password = "";

    // Add one character from each character set to the password
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Add random characters from the combined set until reaching the desired length
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Set the generated password as the value of the password input field
    passwordBox.value = password;
}

// Function to copy the generated password to the clipboard
function copyPassword() {
    // Select the text in the password input field
    passwordBox.select();

    // Execute the copy command to copy the selected text to the clipboard
    document.execCommand("copy");
}
