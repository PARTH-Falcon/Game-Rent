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
  

// User Data (Mock Database)
const users = {
    "guest": { password: "", credits: 0 }
};

let currentUser = "guest";

// Function to update user info on UI
function updateUserInfo() {
    document.getElementById("user-name").textContent = currentUser;
    document.getElementById("credits-count").textContent = users[currentUser].credits;

    // Update UI elements based on whether the user is logged in
    if (currentUser === "guest") {
        document.getElementById("login-btn").style.display = "inline-block";
        document.getElementById("user-icon").style.display = "none";
    } else {
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("user-icon").style.display = "inline-block";
    }
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

// Credit management
function rentItem() {
    if (currentUser === "guest") {
        alert("Please log in to rent items.");
        openLoginModal();
        return;
    }

    const rentalConfirmed = confirm("Do you want to rent this item for ₹100?");
    if (rentalConfirmed) {
        users[currentUser].credits += 10; // Earn 10 credits
        alert(`You rented an item and earned 10 credits!`);
        updateUserInfo();
    }
}

function rentWithDiscount() {
    if (currentUser === "guest") {
        alert("Please log in to rent items.");
        openLoginModal();
        return;
    }

    const rentalCost = 100; // Base cost
    const availableCredits = users[currentUser].credits;
    const discount = availableCredits >= rentalCost ? rentalCost : availableCredits;

    users[currentUser].credits -= discount;
    const finalCost = rentalCost - discount;

    alert(`Rental cost after applying credits: ₹${finalCost}`);
    updateUserInfo();
}

// Initialize UI on page load
document.addEventListener("DOMContentLoaded", updateUserInfo);
