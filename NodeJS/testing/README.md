# 🧪 Testing & Debugging in Node.js – Interview Guide

This section covers testing frameworks (Jest, Mocha/Chai), integration testing, debugging tools, and monitoring (nodemon/pm2).

# 🔹 1. Unit Testing with Jest

👉 Jest is a popular testing framework with built-in assertions and mocks.
```javascript

// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// math.test.js
const add = require("./math");

test("adds 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});
```

Run tests:

npx jest

# 🔹 2. Unit Testing with Mocha + Chai

👉 Mocha is a test runner, Chai provides assertion styles (expect, should, assert).
```javascript

// math.js
function multiply(a, b) {
  return a * b;
}
module.exports = multiply;

// math.test.js
const { expect } = require("chai");
const multiply = require("./math");

describe("Multiply function", () => {
  it("should return 6 when 2 * 3", () => {
    expect(multiply(2, 3)).to.equal(6);
  });
});
```

Run tests:

npx mocha

# 🔹 3. Integration Testing with Supertest

👉 Supertest is used to test APIs built with Express.
```javascript

// app.js
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

module.exports = app;

// app.test.js
const request = require("supertest");
const app = require("./app");

describe("GET /hello", () => {
  it("should return Hello World", async () => {
    const res = await request(app).get("/hello");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Hello World");
  });
});
```

Run tests with Jest or Mocha.

# 🔹 4. Debugging with Chrome DevTools / VSCode
Using Chrome DevTools

Run Node.js with inspect mode:

node --inspect index.js


Open chrome://inspect in Chrome → Connect to debugger.

Set breakpoints, inspect variables, step through code.

Using VSCode

Add launch.json in .vscode folder:
```javascript

{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug App",
      "program": "${workspaceFolder}/index.js"
    }
  ]
}
```

Press F5 to start debugging inside VSCode.

# 🔹 5. Using nodemon

👉 Auto-restarts the server when file changes.

npm install --save-dev nodemon

// package.json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}


Run:

npm run dev

# 🔹 6. Using pm2

👉 pm2 is a production process manager with monitoring, clustering, and auto-restart.
```javascript

npm install -g pm2

Start app
pm2 start index.js --name myapp

Monitor logs
pm2 logs myapp

Restart / Stop
pm2 restart myapp
pm2 stop myapp

Run in cluster mode (multi-core usage)
pm2 start index.js -i max

```

# Quick Recap for Interviews

    Jest / Mocha+Chai → Unit testing frameworks

    Supertest → Integration testing for APIs

    Debugging → Chrome DevTools, VSCode breakpoints

    nodemon → Development auto-restart

    pm2 → Production process manager + clustering
