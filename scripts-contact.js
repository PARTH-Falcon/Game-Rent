// scripts-contact.js

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
  