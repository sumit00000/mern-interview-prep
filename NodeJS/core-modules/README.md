📘 Node.js Core Modules – Complete Guide

This guide explains the most important Node.js core modules with explanations and coding examples.
Perfect for interview prep and quick revision.

🔹 1. fs (File System)

Used to interact with the file system (create, read, update, delete files).

Sync vs Async Example
```Javascript
    const fs = require('fs');

    // Sync (blocking)
    const data = fs.readFileSync('test.txt', 'utf-8');
    console.log('Sync Data:', data);

    // Async (non-blocking)
    fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('Async Data:', data);
    });
    console.log('This runs before async read finishes');
```

Stream Example

const fs = require('fs');

const readStream = fs.createReadStream('bigfile.txt');
readStream.on('data', chunk => console.log('Chunk:', chunk.toString()));

🔹 2. path (Path Utilities)

Helps work with file paths across operating systems.
```Javascript
    const path = require('path');

    console.log(path.basename('/user/test/file.txt'));  // file.txt
    console.log(path.dirname('/user/test/file.txt'));   // /user/test
    console.log(path.extname('index.html'));            // .html
    console.log(path.join('/user', 'docs', 'file.txt'));// /user/docs/file.txt
    console.log(path.resolve('file.txt'));              // Absolute path
```
🔹 3. os (Operating System Info)

Provides system-level information.
```Javascript

    const os = require('os');

    console.log('Platform:', os.platform());       // win32, linux, darwin
    console.log('CPU Cores:', os.cpus().length);   // Number of cores
    console.log('Free Memory:', os.freemem());     // Free memory
    console.log('Home Directory:', os.homedir());  // Home directory path
    console.log('Uptime:', os.uptime());           // System uptime (seconds)
```
🔹 4. http / https

Used to create web servers and make requests.

HTTP Server
```Javascript

    const http = require('http');

    const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js server!');
    });

    server.listen(3000, () => console.log('Server running on port 3000'));
```

HTTP Client Request
```Javascript

    const http = require('http');

    http.get('http://jsonplaceholder.typicode.com/todos/1', res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => console.log('Response:', data));
    });
```
🔹 5. events (EventEmitter)

Node.js is event-driven. The EventEmitter class allows custom events.
```Javascript
    const EventEmitter = require('events');
    const emitter = new EventEmitter();

    // Listener
    emitter.on('greet', name => console.log(`Hello, ${name}`));

    // Emit
    emitter.emit('greet', 'Sumit');  // Output: Hello, Sumit
```
🔹 6. util (Utilities)

Provides helper functions.

Promisify Example
```Javascript

    const util = require('util');
    const fs = require('fs');

    const readFilePromise = util.promisify(fs.readFile);

    async function read() {
    const data = await readFilePromise('test.txt', 'utf-8');
    console.log(data);
    }
    read();
```

Inheritance Example
```Javascript

    const util = require('util');

    function Person(name) {
    this.name = name;
    }
    Person.prototype.sayHello = function() {
    console.log(`Hello, I am ${this.name}`);
    };

    function Student(name, subject) {
    Person.call(this, name);
    this.subject = subject;
    }
    util.inherits(Student, Person);

    const s = new Student('Sumit', 'CS');
    s.sayHello();  // Hello, I am Sumit
```
🔹 7. crypto (Security)

Used for hashing, encryption, and generating secure tokens.

Hash Example
```Javascript

    const crypto = require('crypto');

    const hash = crypto.createHash('sha256').update('password123').digest('hex');
    console.log('Hash:', hash);


    Random Token Example

    const crypto = require('crypto');

    const token = crypto.randomBytes(16).toString('hex');
    console.log('Random Token:', token);
```
🔹 8. buffer (Binary Data)

Buffers are used for handling raw binary data.
```Javascript

    const buf = Buffer.from('Hello');
    console.log(buf);             // <Buffer 48 65 6c 6c 6f>
    console.log(buf.toString());  // Hello
    console.log(buf[0]);          // 72 (ASCII for H)
```
🔹 9. stream (Efficient Data Flow)

Streams handle continuous data (useful for large files, video, sockets).

Transform Stream Example
```Javascript

    const { Readable, Writable, Transform } = require('stream');

    // Readable Stream
    const readable = Readable.from(['Node', 'JS', 'Streams']);

    // Writable Stream
    const writable = new Writable({
    write(chunk, encoding, callback) {
        console.log('Writing:', chunk.toString());
        callback();
    }
    });

    // Transform Stream
    const transform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
    });

    // Pipeline
    readable.pipe(transform).pipe(writable);
```

Output
```Javascript

Writing: NODE
Writing: JS
Writing: STREAMS
```

✅ Quick Recap for Interviews

fs → File handling (sync, async, streams)

path → Path handling (cross-platform)

os → System info (CPU, memory, uptime)

http/https → Servers & clients

events → Event-driven logic

util → Promisify, inheritance, formatting

crypto → Security (hash, encryption, tokens)

buffer → Binary data handling

stream → Efficient data processing