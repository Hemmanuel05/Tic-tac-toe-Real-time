const socket = new WebSocket('ws://localhost:8080');

// Handle errors
socket.onerror = (event) => {
  console.error('Error occurred:', event);
};

// Handle incoming messages
socket.onmessage = (event) => {
  try {
    const data = JSON.parse(event.data);
    // Handle message data
  } catch (error) {
    console.error('Error parsing message:', error);
  }
};

// Handle disconnections
socket.onclose = () => {
  console.log('Connection closed');
};