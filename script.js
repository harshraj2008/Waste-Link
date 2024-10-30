// Function to toggle the chatbot visibility
function toggleChatbot() {
    const chatbot = document.getElementById("chatbot");
    const isChatbotOpen = chatbot.style.display === "block";
    chatbot.style.display = isChatbotOpen ? "none" : "block";
}

// Function to handle sending messages in the chatbot
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const messagesDiv = document.getElementById('messages');

    if (userInput) {
        // Add user's message to chat
        const userMessage = document.createElement('div');
        userMessage.textContent = `You: ${userInput}`;
        messagesDiv.appendChild(userMessage);

        // Generate a bot response based on user input
        const botResponse = document.createElement('div');
        botResponse.textContent = getBotResponse(userInput);
        messagesDiv.appendChild(botResponse);

        // Clear input
        document.getElementById('user-input').value = '';
    }
}

// Function to generate bot responses based on user input
function getBotResponse(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('services')) {
        return "We offer waste collection, resource matching, consultation, and data insights.";
    } else if (lowerInput.includes('mission')) {
        return "Our mission is to promote sustainability and empower communities.";
    } else if (lowerInput.includes('contact')) {
        return "You can reach us at contact@swachhlink.com.";
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return "Hello! How can I assist you today?";
    } else if (lowerInput.includes('help')) {
        return "Sure! You can ask me about our services or how we work.";
    } else {
        return "I'm sorry, I didn't understand that. Can you ask something else?";
    }
}

// Script for dark mode and menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const toggleIcon = document.getElementById("toggle-icon");

    // Check local storage for saved mode preference
    const currentMode = localStorage.getItem("darkMode") || "light";
    if (currentMode === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Update local storage based on the current mode
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "dark");
        } else {
            localStorage.setItem("darkMode", "light");
        }
    });
});

// Function to toggle the navigation menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Sample user data for demonstration (in real applications, you would use a database)
const users = {}; // Empty object to store user credentials

// Function to handle login
function handleLogin(event) {
    event.preventDefault();  // Prevent form submission
    async function handleSignUp(event) {
        event.preventDefault();  // Prevent form submission
    
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirm_password.value;
    
        // Check if the passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }
    
        // Send signup request to backend
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });
    
        const result = await response.json();
        if (response.ok) {
            // Show a pop-up message for successful signup
            alert('Signup successful! You will now be redirected to create your profile.');
    
            // Store login state
            localStorage.setItem('isLoggedIn', 'true'); 
    
            // Redirect to create profile page after a short delay
            setTimeout(() => {
                window.location.href = 'create_profile.html';  // Redirect to create profile page
            }, 2000); // 2 seconds delay
        } else {
            alert(result.message);
        }
    }
    
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Check if the email and password match
    if (users[email] && users[email].password === password) {
        // Show a pop-up message for successful login
        alert('Login successful! Redirecting to create your profile...');

        // Redirect to the profile creation page
        localStorage.setItem('isLoggedIn', 'true'); // Store login state
        window.location.href = 'create_profile.html';  // Replace with your profile creation page URL
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Function to handle forgotten password
function handleForgotPassword(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const email = document.querySelector('input[name="email"]').value;

    // Example: Replace this with your password reset logic
    if (email) {
        alert(`A password reset link has been sent to ${email}.`);
        window.location.href = 'login.html'; // Redirect back to login after sending the link
    } else {
        alert("Please enter a valid email.");
    }
}


function checkLogin() {
    if (!localStorage.getItem('isLoggedIn')) {
        // Redirect to the login page if the user is not logged in
        window.location.href = 'login.html';
    } else {
        // User is logged in, show main section
        document.getElementById('main-section').style.display = 'block';
    }
}

// Function to generate a waste estimate based on user input
function generateWasteEstimate() {
    const input = document.getElementById('user-input').value;
    // Placeholder for generating waste estimate
    alert(`Estimated waste for production details "${input}": (Placeholder for actual data)`);
}
async function handleSignUp(event) {
    event.preventDefault();  // Prevent form submission

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirm_password.value;

    // Check if the passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Send signup request to backend
    const response = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    const result = await response.json();
    if (response.ok) {
        alert(result.message);
        localStorage.setItem('isLoggedIn', 'true'); // Store login state
        window.location.href = 'create_profile.html';  // Redirect to create profile page
    } else {
        alert(result.message);
    }
}
