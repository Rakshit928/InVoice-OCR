document.getElementById('login-signup-link').addEventListener('click', function(event) {
    event.preventDefault();
    var registrationContainer = document.getElementById('registration-container');
    registrationContainer.style.display = 'block';
  });
  
  document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // Here you can perform registration logic, for now let's just simulate it
    // Check if the email already exists, just for demonstration
    var registeredEmails = ['user@example.com', 'anotheruser@example.com']; // Assume these are registered emails
    if (registeredEmails.includes(email)) {
      document.getElementById('registration-message').textContent = "You already have an account.";
    } else {
      // Proceed with registration logic
      // For now, let's just log the email and password
      console.log('Email:', email);
      console.log('Password:', password);
      document.getElementById('registration-message').textContent = "Registration successful!";
    }
  });
  