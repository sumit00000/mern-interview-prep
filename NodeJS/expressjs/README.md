📘 Express.js – Complete Guide (Interview Focused)

This guide covers Express.js fundamentals with explanations + coding examples.

🔹 1. Creating a REST API with Express
```Javascript

    const express = require("express");
    const app = express();
    const PORT = 3000;

    app.use(express.json()); // parse JSON body

    // Simple GET
    app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello World!" });
    });

    // POST
    app.post("/api/data", (req, res) => {
    res.json({ received: req.body });
    });

    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
```

🔹 2. Middleware (Built-in, Custom, Third-party)

Built-in → express.json(), express.urlencoded(), express.static()

Custom → Own logic

Third-party → Example: morgan, cors
```Javascript

    const morgan = require("morgan");
    app.use(express.json());             // built-in
    app.use(morgan("dev"));              // third-party

    // Custom middleware
    app.use((req, res, next) => {
    console.log("Request URL:", req.url);
    next();
    });

    🔹 3. Request & Response Objects
    app.get("/user/:id", (req, res) => {
    console.log("Params:", req.params.id);
    console.log("Query:", req.query.name);
    res.status(200).send(`User ID: ${req.params.id}, Name: ${req.query.name}`);
    });

🔹 4. Error Handling Middleware
// Normal route
    app.get("/error", (req, res, next) => {
    const err = new Error("Something went wrong!");
    err.status = 500;
    next(err);
    });

// Error handler (always has 4 params)
    app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
    });

    🔹 5. Routing (Params, Query, Body Parsing)
    // Params
    app.get("/product/:id", (req, res) => {
    res.send(`Product ID: ${req.params.id}`);
    });

// Query
    app.get("/search", (req, res) => {
    res.send(`Search keyword: ${req.query.q}`);
    });

    // Body
    app.post("/login", (req, res) => {
    const { username, password } = req.body;
    res.json({ username, password });
    });

    🔹 6. Serving Static Files
    // Serve files from 'public' folder
    app.use(express.static("public"));
```

👉 Example: /public/index.html → accessible at http://localhost:3000/index.html

🔹 7. Express Router

Used for modular route handling.
```Javascript

    const express = require("express");
    const userRouter = express.Router();

    userRouter.get("/", (req, res) => res.send("All Users"));
    userRouter.post("/", (req, res) => res.send("Create User"));

    app.use("/users", userRouter);
```

👉 Now available at /users

🔹 8. Security (Helmet, Rate Limiting, CORS)
```Javascript

    const helmet = require("helmet");
    const rateLimit = require("express-rate-limit");
    const cors = require("cors");

    app.use(helmet());   // secure headers
    app.use(cors());     // enable CORS

    // Rate limit: 100 requests per 15 mins per IP
    app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
    }));
```

🔹 9. Performance Best Practices (Compression, Caching)
```Javascript
const compression = require("compression");

app.use(compression()); // compress responses

// Example of caching
app.get("/cache", (req, res) => {
  res.set("Cache-Control", "public, max-age=3600"); // cache 1 hour
  res.send("Cached response");
});
```

✅ Quick Recap for Interviews
```Javascript

    Creating REST API → app.get, app.post, etc.

    Middleware → Built-in, custom, third-party

    Req & Res → params, query, body

    Error handling → Always 4 params (err, req, res, next)

    Routing → Modularize with express.Router()

    Static files → express.static()

    Security → Helmet, CORS, rate limiting

    Performance → Compression, caching
```