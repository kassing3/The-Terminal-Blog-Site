const loginFormHandler = async (event) => {
    event.preventDefault();
    
  
    // Collect values from the login form
    const username = document.querySelector('#inputUsername').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
        alert('Incorrect username or password, please try again');

        
      }
    }
  };
  
  
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  