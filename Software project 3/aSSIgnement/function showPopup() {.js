function showPopup() {
    alert("Welcome to the Form Validation Page!");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    if (name === "" || email === "" || password === "" || phone === "" || address === "") {
        alert("All fields must be filled out!");
        return false;
    }

    let emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format!");
        return false;
    }

    let phonePattern = /^[0-9]{10,}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be at least 10 digits!");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
