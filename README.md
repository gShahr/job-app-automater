# Job Application Automater

## Description
Job Application Automater is a Chrome extension designed to automatically fill in job application forms on websites. This extension helps save time by pre-filling common fields such as name, email, and phone number.

## Features
- Automatically fills in the name, email, and phone number fields on job application forms.
- Can be extended to fill in additional fields as needed.

## Installation
1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the folder containing this project.

## Usage
1. Once the extension is loaded, navigate to a job application page.
2. The extension will automatically fill in the fields specified in the `content.js` file.

## Files
- `manifest.json`: The manifest file that provides metadata about the extension.
- `content.js`: The content script that contains the logic to fill in the job application forms.

## Example
The `content.js` file currently fills in the following fields:
- Name: "John Doe"
- Email: "john.doe@example.com"
- Phone: "123-456-7890"

You can modify the `content.js` file to fill in additional fields as needed.

```javascript
// Example: Automatically fill in a job application form
window.addEventListener('load', () => {
    // Fill in the name field
    const nameField = document.querySelector('input[name="name"]');
    if (nameField) {
      nameField.value = "John Doe";
    }
  
    // Fill in the email field
    const emailField = document.querySelector('input[name="email"]');
    if (emailField) {
      emailField.value = "john.doe@example.com";
    }
  
    // Fill in the phone number field
    const phoneField = document.querySelector('input[name="phone"]');
    if (phoneField) {
      phoneField.value = "123-456-7890";
    }
  
    // Fill in other fields as needed
    // ...
});