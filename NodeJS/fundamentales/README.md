# Node.js Fundamentals (Basics)

1. ## What is Node.js?
Node.js is a runtime environment that allows JavaScript to run outside the browser. It is **event-driven**, **single-threaded**, and uses **non-blocking I/O**, making it ideal for scalable network applications. Node.js uses Google's V8 JavaScript engine to compile JavaScript code to machine code.

2. ## Difference Between JavaScript in Browser vs Node.js
- JavaScript in browsers runs in the browser environment with access to the DOM and browser APIs.
- Node.js provides server-side execution with access to file system, network, and OS resources, which are not available in browsers.
- Node.js extends JavaScript capabilities enabling backend development.

3. ## Node.js Architecture
Key components of Node.js architecture include:
- **V8 Engine:** Compiles JS to machine code.
- **libuv:** Handles asynchronous I/O, provides thread pool, timers, and event loop.
- **Event Loop:** Single-threaded loop that processes client requests asynchronously.
- **Thread Pool:** Handles blocking operations in separate threads outside the main event loop.

This architecture allows efficient handling of concurrent client requests without spawning multiple OS threads.

4. ## Node.js Execution Model
Node.js execution is based on the JavaScript event loop mechanism, which is single-threaded:
- Incoming requests are placed in an event queue.
- The event loop processes these requests one by one.
- For I/O-bound or blocking tasks, the event loop delegates work to the libuv thread pool.
- Callback functions run upon completion of async tasks, and responses are sent back.
- Supports sequential, concurrent, and parallel execution depending on task dependencies.

5. ## Event Loop Phases and Example

The event loop has several phases executed in order:
1. **Timers Phase:** Executes callbacks from `setTimeout()` and `setInterval()`.
2. **Pending Callbacks Phase:** Executes I/O callbacks deferred from previous loop.
3. **Poll Phase:** Retrieves new I/O events and executes their callbacks.
4. **Check Phase:** Executes callbacks from `setImmediate()`.
5. **Close Callbacks:** Handles resource close events.

Additionally, microtasks include:
- `process.nextTick()` callbacks (highest priority)
- Promise callbacks (`.then()`, `.catch()`)

### Example Showing Event Loop Order
```javascript
        console.log('1. Start');

        process.nextTick(() => {
        console.log('2. process.nextTick callback');
        });

        Promise.resolve().then(() => {
        console.log('3. Promise then callback');
        });

        setTimeout(() => {
        console.log('4. setTimeout callback');
        }, 0);

        setImmediate(() => {
        console.log('5. setImmediate callback');
        });

        console.log('6. End');
```

**Expected Output:**
```javascript

        Start

        End

        process.nextTick callback

        Promise then callback

        setTimeout callback

        setImmediate callback
```

This shows synchronous code runs first, followed by `process.nextTick`, then Promise microtasks, then timers, and finally `setImmediate`.

6. ## REPL Usage
REPL (Read-Eval-Print Loop) allows interactive execution of Node.js commands:
- Useful for quick testing, debugging, and learning.
- Start REPL by running `node` in the terminal.

7. ## Understanding npm / npx / package.json
- **npm:** Node Package Manager, used for installing and managing dependencies.
- **npx:** Tool to execute Node packages without globally installing them.
- **package.json:** Project configuration file listing dependencies, scripts, and metadata.

8. ## ES6+ Features Used in Node.js
Node.js supports modern JavaScript features including:
- `let` and `const` for block-scoped variables
- Arrow functions (`=>`) for concise syntax
- Async/await for asynchronous code handling
- Destructuring and spread/rest operators for cleaner object/array manipulation
- Native ES modules for modular code structure

---


