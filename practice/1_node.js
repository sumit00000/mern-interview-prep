/*
What is Node.js?

Node.js is a free, open-source, cross-platform JavaScript runtime environment built on Chrome’s V8 JavaScript engine.
It allows developers to run JavaScript code outside of a browser, primarily on the server side, enabling the creation of fast, scalable network applications.

Unlike traditional server-side platforms that create a new thread for each request, Node.js uses a single-threaded, event-driven, non-blocking I/O model.
This means it can handle many concurrent connections efficiently without waiting for operations like file or network access to complete before moving on to the next task.
This makes Node.js especially well-suited for building data-intensive real-time applications that run across distributed devices.

Key Features of Node.js:
- Event-driven architecture: Operations like reading files or making network requests trigger events when complete, so Node.js can keep processing other tasks without blocking.
- Non-blocking I/O: Input/output operations are asynchronous, so the server stays responsive.
- Single-threaded but scalable: Uses a single thread with an event loop but can handle thousands of simultaneous connections.
- Cross-platform: Runs on Windows, macOS, Linux, and more.
- npm (Node Package Manager): Comes with a huge ecosystem of packages to add functionality.

Simple Node.js Example: HTTP Server
Below is a basic Node.js server that listens on port 3000 and responds with "Hello from Node.js!" to every request.
*/

// Import the built-in http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response header with status 200 (OK) and content type as plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body
  res.end('Hello from Node.js!');
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

/*
How to run this example:
1. Save this file as server.js
2. Open your terminal/command prompt and navigate to the folder containing server.js
3. Run the command: node server.js
4. Open your browser and visit http://localhost:3000
5. You should see the message: "Hello from Node.js!"

This example demonstrates the basic idea of how Node.js handles HTTP requests in an event-driven, non-blocking manner,
making it efficient for handling many users at once.
*/
