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