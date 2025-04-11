const users = [];
const doctors = [];

// Section toggler
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// Sign Up
function registerUser() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const age = document.getElementById("signupAge").value;
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;
  const msg = document.getElementById("signupMsg");

  if (!name || !email || !password || password !== confirm) {
    msg.textContent = "Please fill out all fields correctly.";
    return;
  }

  users.push({ name, email, password });
  msg.textContent = "Account created successfully!";
}

// Login
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const msg = document.getElementById("loginMsg");

  const user = users.find(u => u.email === email && u.password === password);

  msg.textContent = user ? "Login successful!" : "Invalid credentials.";
}

// Doctor Register
function registerDoctor() {
  const name = document.getElementById("docName").value;
  const email = document.getElementById("docEmail").value;
  const specialization = document.getElementById("docSpecial").value;
  const days = document.getElementById("docDays").value;
  const start = document.getElementById("docStart").value;
  const end = document.getElementById("docEnd").value;
  const msg = document.getElementById("docMsg");

  if (!name || !email || !specialization) {
    msg.textContent = "Please complete the form.";
    return;
  }

  doctors.push({ name, email, specialization, days, start, end });
  msg.textContent = "Doctor registered. Pending admin approval.";
}

// Search Doctor
function searchDoctor() {
  const field = document.getElementById("searchField").value.toLowerCase();
  const results = document.getElementById("searchResults");
  results.innerHTML = "";

  const filtered = doctors.filter(doc => doc.specialization.toLowerCase().includes(field));
  
  if (filtered.length === 0) {
    results.innerHTML = "<p>No matching doctors found.</p>";
  } else {
    filtered.forEach(doc => {
      results.innerHTML += `
        <div>
          <h4>${doc.name} - ${doc.specialization}</h4>
          <p>Available: ${doc.days} | ${doc.start} - ${doc.end}</p>
        </div>
      `;
    });
  }
}
