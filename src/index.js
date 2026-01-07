function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messages');
    
    if (messageInput.value.trim() === "") {
        return; // Don't send empty messages
    }
    
    // Create a new message div
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = messageInput.value;
    
    // Append the message to the chatbox
    messagesContainer.appendChild(messageDiv);
    
    // Clear the input field
    messageInput.value = '';
    
    // Scroll to the bottom of the chatbox
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


