const express = require('express');
const customerRoutes = require(`./customerRoutes.js`);
// Import all route handlers

let logCounter = 1;
// 1. Set up the server
const app = express();
const port = 3000;

// PRE-HANDLER MIDDLEWARE
app.use(express.json());

// Customer MIDDLEWARE logging
app.use((req, res, next) => {
    console.log(`${logCounter++}| Method: ${req.method}`);
    next();
});

// Custome middleware - LOG RESPONSES
app.use((req, res, next) => {
    // const oldSend = res.send;
    // res.send = (body) => {
    //     console.log(Bodey: ${body});
    //     // Function.call(oldSend, body);
    //     oldSend.call(this, body);
    //     next();
    // }

    res.on('finish', () => {
        console.log('Finish');
    })
    next();
});

// Delegate routing for '/api/customers' starting endpoint
app.use('/api/customers', customerRoutes);

// 2. Set up the routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api', (req, res) => {
    res.send({ message: 'Hello World!' });
});

// Example: /api/search?q=hello
app.get('/api/search', (req, res) => {
    const { q } = req.query;

    // Iterate over all keys in a JS object
    for (let key in req.query) {
        console.log(key, req.query[key]);
    }

    // Perform search
    const error = new Error(`Critical server error`);
    error.status(403);

    if (error) {
        newt(error);
    } else {
        res.send({ 'search': q });
    }

});

// POST-HANDLER MIDDLEWARE
// Customer MIDDLEWARE l- errors
app.use((err, res, next) => {
    console.log(`${logCounter++}| Method: ${req.method}`);
    res.status(err.status || 500).json({ error: err.message });
});

// 3. Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

