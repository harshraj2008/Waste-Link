function toggleChatbot() {
    const chatbot = document.getElementById("chatbot");
    const isChatbotOpen = chatbot.style.display === "block";
    chatbot.style.display = isChatbotOpen ? "none" : "block";
}

// Function to handle sending messages
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

// script.js
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

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
