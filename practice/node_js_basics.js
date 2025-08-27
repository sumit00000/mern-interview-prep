/*
1. What is Node.js?

Node.js is a free, open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine. 
It is designed for creating servers and web applications. Node.js uses an event-driven, non-blocking I/O model, 
which makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
*/

/*
2. How is Node.js different from JavaScript?

JavaScript is a programming language primarily used for client-side scripting in web browsers, manipulating the DOM and handling user interactions.  
Node.js is a runtime environment that allows JavaScript to be executed on the server side, enabling back-end development such as file handling, HTTP servers, and system operations.

Example:
*/

// JavaScript (browser) example — This can't run in Node.js directly, just for reference:
// document.getElementById('demo').innerHTML = 'Hello, World!';

// Node.js (server) example:
const fs = require('fs');
fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});

/*
3. What is npm and why is it important in Node.js?

npm (Node Package Manager) is the default package manager for Node.js. It allows developers to install, share, and manage third-party libraries and dependencies for their projects. 
npm simplifies dependency management and promotes code reuse, helping projects stay organized and scalable.

Example: Run this in terminal (not in code):
npm install express
*/

/*
4. What is the event loop in Node.js?

The event loop is a core feature of Node.js that handles asynchronous operations without blocking the main thread. It processes callbacks from events like I/O operations, timers, and network requests, enabling Node.js to handle multiple concurrent tasks efficiently.

Example:
*/
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
console.log('End');

/*
Output:
Start
End
Timeout
*/

/*
5. What is the difference between synchronous and asynchronous programming?

- Synchronous programming blocks code execution until a task completes. It is sequential and can slow down applications.
- Asynchronous programming allows other operations to continue while waiting for tasks (like I/O) to complete, improving efficiency.

Examples:
*/

// Synchronous read (blocking)
try {
  const dataSync = fs.readFileSync('example.txt', 'utf8');
  console.log('Synchronous read:', dataSync);
} catch (err) {
  console.error(err);
}

// Asynchronous read (non-blocking)
fs.readFile('example.txt', 'utf8', (err, dataAsync) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Asynchronous read:', dataAsync);
});
console.log('Reading file asynchronously...');

/*
6. What are callbacks in Node.js?

Callbacks are functions passed as arguments to other functions and executed after an asynchronous operation completes. They allow Node.js to perform non-blocking operations and handle results or errors efficiently.

Example:
*/

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Callback error:', err);
    return;
  }
  console.log('Callback data:', data);
});

/*
7. What is the purpose of `require()` in Node.js?

`require()` is used to import modules in Node.js. It loads built-in, third-party, or custom modules, promoting modularity and code reuse.

Example:
*/
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Read file using path module:', data);
});

/*
8. What are some important built-in modules in Node.js?

Key built-in modules include:  
- fs: File system operations  
- http: Creating HTTP servers and clients  
- path: Handling file and directory paths  
- os: Operating system utilities  
- url: URL parsing  
- crypto: Cryptography functions  
- stream: Streaming data  
- util: Utility functions

Example using fs already shown above.
*/

/*
9. How do you read and write files using the `fs` module?

Reading asynchronously:
*/
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Read error:', err);
    return;
  }
  console.log('File content:', data);
});

/*
Writing asynchronously:
*/
const contentToWrite = 'Hello, Node.js!';
fs.writeFile('example.txt', contentToWrite, (err) => {
  if (err) {
    console.error('Write error:', err);
    return;
  }
  console.log('File written successfully with new content.');
});

/*
10. How do you create a simple HTTP server in Node.js?

Example:
*/
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

/*
To test the server:  
1. Run this file using `node filename.js`  
2. Open your browser and go to http://localhost:3000  
3. You should see "Hello, World!"
*/
