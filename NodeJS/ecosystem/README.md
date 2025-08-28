# 🌐 Node.js Ecosystem & Miscellaneous – Interview Guide

This section covers TypeScript, monorepos, GraphQL, gRPC, microservices, serverless, best practices, and common interview challenges.

## 🔹 1. TypeScript with Node.js

👉 TypeScript adds static typing for safer, maintainable code.
``` javascript
npm install typescript ts-node @types/node --save-dev
npx tsc --init

// app.ts
const greet = (name: string): string => {
  return `Hello, ${name}`;
};
console.log(greet("Sumit"));
```

Run with:
``` javascript

npx ts-node app.ts
```

## 🔹 2. Monorepos (Nx / Turborepo)

👉 Monorepo = manage multiple projects/packages in one repo.

Nx – powerful build system for monorepos

Turborepo – faster builds, caching

Turborepo Example (turbo.json)
``` javascript


{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    }
  }
}
```
## 🔹 3. GraphQL with Node.js

👉 Query language for APIs (alternative to REST).

// npm install express express-graphql graphql
``` javascript

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => "Hello GraphQL!" };

const app = express();
app.use("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: true }));
app.listen(4000, () => console.log("Server running at http://localhost:4000/graphql"));
```

## 🔹 4. gRPC with Node.js

👉 gRPC = high-performance RPC framework using Protocol Buffers.
``` javascript

// greet.proto
syntax = "proto3";

service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply);
}

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
}
```

Server Example:
``` javascript

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDef = protoLoader.loadSync("greet.proto");
const grpcObject = grpc.loadPackageDefinition(packageDef);
const greeter = grpcObject.Greeter;

const server = new grpc.Server();
server.addService(greeter.service, {
  SayHello: (call, callback) => callback(null, { message: `Hello, ${call.request.name}` }),
});

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => {
  server.start();
});
```
## 🔹 5. Microservices Architecture

👉 Break app into independent services communicating via APIs/queues.

Pros: scalability, fault isolation

Cons: complexity, distributed debugging

Example: User service & Order service communicate via REST or RabbitMQ.
``` javascript

// userService.js
app.get("/users/:id", (req, res) => {
  res.json({ id: req.params.id, name: "Alice" });
});

// orderService.js (calls user service)
const axios = require("axios");
app.get("/orders/:id", async (req, res) => {
  const user = await axios.get(`http://localhost:3000/users/1`);
  res.json({ orderId: req.params.id, user: user.data });
});
```

## 🔹 6. Serverless (AWS Lambda, Netlify, Vercel)

👉 Serverless = deploy functions without managing servers.

AWS Lambda Example
``` javascript

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" }),
  };
};
```

Deploy with Serverless Framework:
``` javascript

sls create -t aws-nodejs
sls deploy
```
## 🔹 7. Best Practices & Design Patterns

Singleton → single instance (DB connection)
``` javascript

class DB {
  constructor() {
    if (DB.instance) return DB.instance;
    DB.instance = this;
  }
}
```

Factory → create objects without exposing logic
``` javascript

function userFactory(type) {
  if (type === "admin") return { role: "admin" };
  return { role: "user" };
}
```

Observer → pub-sub model
``` javascript

const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("event", (msg) => console.log("Received:", msg));
emitter.emit("event", "Hello Observer!");
```
# 🔹 8. Common Interview Challenges

### ✅ Rate Limiter
``` javascript

const rateLimit = {};
app.use((req, res, next) => {
  const ip = req.ip;
  rateLimit[ip] = (rateLimit[ip] || 0) + 1;
  if (rateLimit[ip] > 5) return res.status(429).send("Too many requests");
  next();
});
```

### ✅ File Upload (Multer)
``` javascript

const multer = require("multer");
const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded!");
});
```

### ✅ Authentication (JWT)
``` javascript

const jwt = require("jsonwebtoken");
const token = jwt.sign({ id: 1 }, "secret", { expiresIn: "1h" });
console.log(token);
```

### ✅ Chat App (Socket.IO)
``` javascript

const io = require("socket.io")(3000);
io.on("connection", (socket) => {
  socket.on("chat", (msg) => io.emit("chat", msg));
});
```

## Quick Recap for Interviews

    TypeScript → safer Node.js development

    Monorepos → manage multiple projects with Nx/Turborepo

    GraphQL → flexible API querying

    gRPC → fast communication with Protocol Buffers

    Microservices → scalability & modularization

    Serverless → deploy functions (AWS Lambda, Vercel, Netlify)

    Design Patterns → Singleton, Factory, Observer

    Common Challenges → rate limiter, file upload, JWT auth, chat app