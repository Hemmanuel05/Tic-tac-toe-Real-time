const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

// Handle errors
wss.on('error', (error) => {
  console.error('Error occurred:', error);
});

// Handle incoming connections
wss.on('connection', (ws) => {
  console.log('New connection established');

  // Handle incoming messages
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      // Handle message data
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  });

  // Handle errors
  ws.on('error', (error) => {
    console.error('Error occurred:', error);
  });

  // Handle disconnections
  ws.on('close', () => {
    console.log('Connection closed');
  });
});