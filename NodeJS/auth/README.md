# 🔐 6. Authentication & Security
1. JWT (JSON Web Tokens)

    Definition: A compact, stateless way to securely transmit information between client & server.

    Structure: header.payload.signature (Base64 encoded)

    Header: algorithm & type (e.g., HS256, JWT)

    Payload: user info/claims (e.g., { id: 123, role: "admin" })

    Signature: verifies integrity using secret key

👉 How it works:

    User logs in → server creates JWT.

    Client stores JWT (usually in localStorage or cookie).

    Client sends JWT in Authorization: Bearer <token> header.

    Server verifies & grants access.

    const jwt = require("jsonwebtoken");

```Javascript

// create token
const token = jwt.sign({ id: 1, role: "admin" }, "secretKey", { expiresIn: "1h" });

// verify token
jwt.verify(token, "secretKey", (err, decoded) => {
  if (err) return console.error("Invalid token");
  console.log(decoded);
});
```

👉 Pros: Stateless, scalable
👉 Cons: Can’t be revoked unless using a blacklist

# 2. Sessions & Cookies

    Sessions: Store user data on the server; client only gets a session ID.

    Cookies: Small pieces of data stored on the client, sent with every request.

👉 How it works:

    User logs in → server creates a session (in memory or DB).

    Session ID is stored in a cookie.

    Client sends cookie on each request.

    Server validates session.

    Example with express-session:
```Javascript

    const session = require("express-session");

    app.use(session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // true if HTTPS
    }));

    app.get("/", (req, res) => {
    req.session.user = "sumit";
    res.send("Session set");
    });
```

# 👉 Sessions vs JWT:

    Session: Server-side storage (stateful).

    JWT: Client-side storage (stateless).

3. OAuth2 & Passport.js

    OAuth2: Protocol that allows third-party apps to access user data (Google, GitHub login).

    Passport.js: Authentication middleware for Node.js, supports many strategies (JWT, Google, Facebook, etc.).

Example:
```Javascript

    const passport = require("passport");
    const GoogleStrategy = require("passport-google-oauth20").Strategy;

    passport.use(new GoogleStrategy({
        clientID: "GOOGLE_CLIENT_ID",
        clientSecret: "GOOGLE_CLIENT_SECRET",
        callbackURL: "/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
    ));
```

# 👉 Use case: Social login (Google, GitHub, Facebook).

4. Bcrypt for Password Hashing

    Never store plain-text passwords.

    Use hashing with salt → prevents rainbow table attacks.

    Bcrypt is the most popular hashing algorithm for passwords.

Example:
```Javascript

    const bcrypt = require("bcrypt");

    // hash password
    const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
    };

    // compare password
    const verifyPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
    };
```

# 👉 Stored passwords are hashed → even if DB leaks, raw passwords are safe.

5. Helmet & CORS

    Helmet: Middleware that sets secure HTTP headers.
```Javascript

const helmet = require("helmet");
app.use(helmet());
```

    CORS (Cross-Origin Resource Sharing): Controls which origins can access your API.
```Javascript

const cors = require("cors");
app.use(cors({ origin: "http://example.com", credentials: true }));
```

# 👉 Prevents attacks like clickjacking, data theft.

6. Preventing XSS, CSRF, SQL Injection
    XSS (Cross-Site Scripting)

    Attacker injects malicious JS into a website.

Fixes:
```Javascript

Sanitize user input (validator library, DOMPurify)

Use Helmet (helmet.xssFilter())

const { sanitize } = require("sanitize-html");
const safeInput = sanitize(userInput);
```
CSRF (Cross-Site Request Forgery)

Attacker tricks a logged-in user to perform unintended actions.

Fixes:

    Use CSRF tokens

    Use csurf middleware

    SameSite cookies
```Javascript

const csurf = require("csurf");
app.use(csurf({ cookie: true }));
```
# SQL Injection

Attacker inserts malicious SQL code (OR 1=1) into queries.

Fixes:

Always use parameterized queries / ORM

Example with Sequelize:
```Javascript

User.findOne({ where: { email: req.body.email } });
```

Never concatenate user input into queries.