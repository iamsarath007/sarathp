const loginForm = document.getElementById("loginform"); // Fixed ID: loginform

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

   
    const email = document.getElementById("loginmail").value.trim(); 
    const password = document.getElementById("loginPassword").value;
    const error = document.getElementById("loginError");

    error.textContent = "";

  
    const users = JSON.parse(localStorage.getItem('users')) || [];

  
    const matchingUser = users.find(u => u.email === email && u.password === password);

    if (!matchingUser) {
        error.style.color = "red";
        error.textContent = "Invalid email or password.";
        return;
    }

 
    localStorage.setItem("currentUser", JSON.stringify(matchingUser));

    error.style.color = "green";
    error.textContent = `Welcome back, ${matchingUser.fullName}!`;

   
    setTimeout(() => {
        window.location.href = `../index.html`; 
    }, 1200);
});