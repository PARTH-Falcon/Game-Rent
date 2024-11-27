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
  
// Mock users data
const users = {
    "guest": { password: "", credits: 0 }
};

let currentUser = "guest";

// Function to update user info on UI
function updateUserInfo() {
    document.getElementById("user-name").textContent = currentUser;
    document.getElementById("credits-count").textContent = users[currentUser].credits;
}

// Sidebar controls
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

// Rental agreement modal
function openAgreementModal(rentPrice) {
    if (currentUser === "guest") {
        // Prompt the user to log in first
        alert("Please log in to rent items.");
        openLoginModal();

        // Attach a callback to handle post-login behavior
        document.getElementById("loginForm").onsubmit = function (event) {
            handleLogin(event, () => {
                closeLoginModal(); // Close login modal on success
                showAgreementAfterLogin(rentPrice); // Open the rental agreement modal
            });
        };
        return;
    }
    showAgreementAfterLogin(rentPrice); // If logged in, directly show the agreement modal
}

function showAgreementAfterLogin(rentPrice) {
    // Set the rental price in the modal
    const priceElement = document.getElementById("agreementPrice");
    priceElement.textContent = `₹${rentPrice} per day`;

    // Show the agreement modal
    const modal = document.getElementById("agreementModal");
    modal.style.display = "block";
}

function closeAgreementModal() {
    document.getElementById("agreementModal").style.display = "none";
}

// Rental agreement acceptance
function navigateToRegisterPage() {
    alert("Rental agreement accepted. Proceeding with rental.");
    closeAgreementModal();

    // Simulate adding credits or processing the rental
    users[currentUser].credits -= 10; // Deduct 10 credits for the rental
    updateUserInfo();
}

// Login Modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Updated handleLogin function with callback support
function handleLogin(event, callback) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username].password === password) {
        currentUser = username;
        alert("Login successful!");
        updateUserInfo();
        if (callback) callback(); // Execute the callback after successful login
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

// Close sign-up modal (assuming a sign-up modal exists)
function closeSignUpModal() {
    document.getElementById("signupModal").style.display = "none";
}

// Update UI when the page loads
document.addEventListener("DOMContentLoaded", updateUserInfo);
