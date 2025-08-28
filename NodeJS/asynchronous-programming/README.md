📘 Node.js Asynchronous Programming – Complete Guide

This guide explains the core concepts of async programming in Node.js with explanations and coding examples.
Perfect for interview prep and quick revision.

🔹 1. Callbacks & Callback Hell

A callback is a function passed as an argument to another function and executed later.
```Javascript

    // Example of callback
    function fetchData(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 1000);
    }

    fetchData((data) => console.log(data)); // Data received!

    // Callback Hell (nested callbacks)
    setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
        console.log("Step 3");
        }, 1000);
    }, 1000);
    }, 1000);
```
🔹 2. Promises

Promises represent a value that will be available now, later, or never.
```Javascript

    // Promise Example
    const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data received via Promise!"), 1000);
    });
    };

    fetchData().then(data => console.log(data)); 
```

👉 Solves callback hell with .then() chaining.

🔹 3. Async / Await

Syntactic sugar over Promises, making async code look synchronous.
```Javascript

    function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data with async/await"), 1000);
    });
    }

    async function main() {
    const result = await getData();
    console.log(result);
    }
    main();
```

👉 Cleaner & more readable than Promises.

🔹 4. Error Handling in Async Code

Error handling differs in callbacks, promises, and async/await.
```Javascript

    // Callback style error handling
    function fetchData(callback) {
    setTimeout(() => callback(new Error("Something went wrong")), 1000);
    }
    fetchData((err, data) => {
    if (err) return console.error(err.message);
    });

    // Promise error handling
    fetchDataPromise()
    .then(data => console.log(data))
    .catch(err => console.error(err));

    // Async/await error handling
    async function main() {
    try {
        const data = await fetchDataPromise();
        console.log(data);
    } catch (err) {
        console.error("Caught Error:", err.message);
    }
    }
```

🔹 5. Event Loop Phases
```Javascript

Node.js event loop runs tasks in phases:

Timers → setTimeout, setInterval

Pending Callbacks → OS tasks (like TCP errors)

Idle/Prepare (internal use)

Poll → Get new I/O events, execute I/O callbacks

Check → setImmediate callbacks

Close Callbacks → e.g., socket.on('close')

setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));


👉 Order may vary, but setImmediate is executed after poll phase, while setTimeout(0) goes into timers phase.
```

🔹 6. Microtasks vs Macrotasks
```Javascript

Macrotasks → Scheduled in event loop phases (setTimeout, setImmediate)

Microtasks → Run immediately after current operation (process.nextTick, Promise.resolve)

setTimeout(() => console.log("Macrotask - setTimeout"), 0);

Promise.resolve().then(() => console.log("Microtask - Promise"));

process.nextTick(() => console.log("Microtask - nextTick"));

console.log("Main thread");
```
```Javascript
✅ Output order:

Main thread
Microtask - nextTick
Microtask - Promise
Macrotask - setTimeout
```

✅ Quick Recap for Interviews
```Javascript

Callbacks → First async pattern, can cause callback hell

Promises → Avoids nesting with .then() / .catch()

Async/Await → Cleaner, more readable syntax

Error handling → try/catch with async/await

Event Loop → Runs in phases (Timers → Poll → Check → Close)

Microtasks vs Macrotasks → nextTick & Promises run before timers
```