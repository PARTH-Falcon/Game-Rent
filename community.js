// scripts-how-it-works.js

function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}
// Open Sidebar
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
  }
  
  // Close Sidebar
  function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
  }
  
  // Open Login Modal
  function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
  }
  
  // Close Login Modal
  function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
  }
  
  // Open Sign-Up Modal
  function showSignUp() {
    closeLoginModal();
    document.getElementById("signupModal").style.display = "block";
  }
  
  // Close Sign-Up Modal
  function closeSignUpModal() {
    document.getElementById("signupModal").style.display = "none";
  }
  // Handle login
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username].password === password) {
        currentUser = username;
        closeLoginModal();
        alert("Login successful!");
        updateUserInfo();
    } else {
        alert("Invalid username or password.");
    }
}

// Handle sign-up
function handleSignUp(event) {
    event.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    if (users[username]) {
        alert("Username already exists.");
    } else {
        users[username] = { password, credits: 0 };
        currentUser = username;
        closeSignUpModal();
        alert("Sign-up successful! You are now logged in.");
        updateUserInfo();
    }
}
