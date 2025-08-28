# ⚙️ DevOps & Deployment with Node.js – Interview Guide

Covers environment setup, CI/CD, containerization, deployment, monitoring & logging.

## 🔹 1. Environment Variables & dotenv

👉 Store secrets & configs outside code (DB URL, API keys).
``` javascript
// install dotenv
// npm install dotenv

require("dotenv").config();

console.log("Environment:", process.env.NODE_ENV);
console.log("DB URL:", process.env.DB_URL);
```

.env file:
``` javascript

NODE_ENV=development
DB_URL=mongodb://localhost:27017/testdb
```

## 🔹 2. CI/CD Basics (GitHub Actions, Jenkins)

👉 CI/CD automates testing, building, and deploying apps.

GitHub Actions Example (.github/workflows/node.yml)
name: Node.js CI
``` javascript

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm install
      - run: npm test
```
## 🔹 3. Dockerizing Node.js Apps

👉 Docker ensures consistent environment across systems.

Dockerfile
``` javascript

FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

Build & Run
``` javascript

docker build -t my-node-app .
docker run -p 3000:3000 my-node-app
```
## 🔹 4. PM2 / forever for Process Management

👉 Keeps Node apps running in background & supports clustering.
``` javascript

PM2 Example
npm install -g pm2
pm2 start server.js --name myapp -i max
pm2 status
pm2 logs myapp
pm2 restart myapp
```
Forever Example
``` javascript

npm install -g forever
forever start server.js
forever list
```
## 🔹 5. Deploying Node.js Apps
``` javascript

AWS EC2 – run app on virtual server

AWS Elastic Beanstalk – managed Node deployment

GCP App Engine / Cloud Run – serverless Node hosting

Azure App Service – Node app hosting

Heroku – simple cloud deployment

Vercel / Netlify – great for serverless & frontend
```
Example: Deploy to Heroku
``` javascript

heroku login
heroku create my-node-app
git push heroku main
heroku open
```
## 🔹 6. Logging & Monitoring

👉 Essential for debugging & production stability.

Morgan (HTTP request logger)
``` javascript

const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => res.send("Hello World"));
app.listen(3000);

Winston (structured logging)
const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.json(),
  transports: [new transports.Console(), new transports.File({ filename: "app.log" })],
});

logger.info("Server started");
logger.error("Something went wrong");
```

## Elastic Stack (ELK: Elasticsearch, Logstash, Kibana)

    Collect logs with Logstash / Beats

    Store in Elasticsearch

    Visualize with Kibana

## Quick Recap for Interviews

    dotenv → secure configs in .env

    CI/CD → GitHub Actions, Jenkins for automation

    Docker → consistent containerized deployments

    PM2/forever → keep Node.js apps alive & scalable

    Deployments → AWS, GCP, Azure, Heroku, Vercel

    Logging & Monitoring → Morgan (HTTP), Winston (structured), ELK stack (centralized logs)