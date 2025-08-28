# 🚀 Advanced Node.js – Interview Guide

This section covers performance, clustering, inter-process communication, caching, real-time communication, scaling, and performance tuning.

# 🔹 1. Clustering & Worker Threads

👉 Node.js runs on a single thread by default. To utilize multiple CPU cores, we can use:

Cluster module → multiple Node.js processes sharing the same server port.

Worker Threads → run JavaScript in parallel threads inside the same process.
``` javascript
// cluster-example.js
const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Handled by worker ${process.pid}`);
  }).listen(3000);

  console.log(`Worker ${process.pid} started`);
}
```
# 🔹 2. Child Processes (spawn, exec, fork)

👉 Used to run external commands or separate Node scripts.
``` javascript

const { spawn, exec, fork } = require("child_process");

// spawn → run command with streaming
const ls = spawn("ls", ["-lh", "/usr"]);
ls.stdout.on("data", (data) => console.log(`stdout: ${data}`));

// exec → run command, buffer output
exec("node -v", (err, stdout) => {
  if (err) throw err;
  console.log(`Node version: ${stdout}`);
});

// fork → run another Node script
const child = fork("child.js");
child.send("Hello from parent");
child.on("message", (msg) => console.log("Message from child:", msg));
```
# 🔹 3. Streams & Backpressure

👉 Streams handle large data efficiently without loading it all into memory.
👉 Backpressure occurs when a writable stream cannot consume data as fast as the readable stream provides it.
``` javascript

const fs = require("fs");

// Example: Copy file using streams
const readable = fs.createReadStream("input.txt");
const writable = fs.createWriteStream("output.txt");

// Pipe handles backpressure automatically
readable.pipe(writable);
```
# 🔹 4. Caching Strategies (Redis, In-Memory)

👉 Improves performance by avoiding repeated expensive operations.

In-Memory Cache (simple object)
``` javascript
const cache = {};

function getUser(id) {
  if (cache[id]) {
    return Promise.resolve(cache[id]); // return cached
  }
  // Simulate DB fetch
  return new Promise((res) => {
    setTimeout(() => {
      cache[id] = { id, name: "User" + id };
      res(cache[id]);
    }, 1000);
  });
}

getUser(1).then(console.log); // slow (first time)
getUser(1).then(console.log); // fast (cached)
```
Redis Cache Example
``` javascript

const redis = require("redis");
const client = redis.createClient();

client.connect();

async function cacheData() {
  await client.set("greet", "Hello Redis!", { EX: 60 });
  const value = await client.get("greet");
  console.log(value);
}

cacheData();
```
# 🔹 5. WebSockets (Socket.IO)

👉 WebSockets enable real-time bidirectional communication.
``` javascript

// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("welcome", "Hello Client");

  socket.on("message", (msg) => {
    console.log("Client says:", msg);
  });
});

server.listen(3000, () => console.log("Server on 3000"));
```
# 🔹 6. Message Queues (RabbitMQ, Kafka)

👉 Used for asynchronous communication between services (decoupling).

RabbitMQ Example (amqplib)
``` javascript

const amqp = require("amqplib");

async function sendMessage() {
  const conn = await amqp.connect("amqp://localhost");
  const ch = await conn.createChannel();
  const q = "hello";
  await ch.assertQueue(q);
  ch.sendToQueue(q, Buffer.from("Hello RabbitMQ"));
  console.log("Message sent");
}
sendMessage();
```
# 🔹 7. Scaling Node.js Apps

Load Balancing – distribute requests across multiple Node instances (e.g., Nginx, AWS ELB).

Horizontal Scaling – run multiple servers behind a load balancer.

Cluster mode – run Node.js with pm2 or cluster module.

Example with pm2 cluster:

pm2 start server.js -i max

# 🔹 8. Profiling & Performance Tuning

## 👉 Helps identify bottlenecks in Node.js apps.

Node.js Profiler
node --prof app.js

Using clinic tool
npm install -g clinic
clinic doctor -- node app.js


## 👉 Other strategies:

Avoid blocking code (sync I/O, heavy loops).

Use caching (Redis, in-memory).

Optimize DB queries (indexes, pagination).

Use streams for large data.

Use clustering and load balancing.

# Quick Recap for Interviews

Cluster vs Worker Threads → scaling CPU usage

Child processes → run commands / scripts in parallel

Streams & Backpressure → memory-efficient data handling

Caching → Redis, in-memory

WebSockets → real-time apps (chat, notifications)

Message Queues → RabbitMQ, Kafka for async processing

Scaling → load balancing, clustering, horizontal scaling

Profiling → find bottlenecks with profiler/clinic