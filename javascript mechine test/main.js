const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const error = document.getElementById("error");

    error.textContent = "";
    error.classList.remove("success-message");

    const nameRegex = /^[A-Za-z ]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!nameRegex.test(fullName)) {
        error.textContent = "Enter a valid full name.";
        return;
    }

    if (!emailRegex.test(email)) {
        error.textContent = "Enter a valid email address.";
        return;
    }

    if (!phoneRegex.test(phone)) {
        error.textContent = "Phone number must contain exactly 10 digits.";
        return;
    }

    if (!passwordRegex.test(password)) {
        error.textContent =
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.";
        return;
    }

    if (password !== confirmPassword) {
        error.textContent = "Passwords do not match.";
        return;
    }


    error.textContent = "Sign up successful!";
    error.classList.add("success-message");
});