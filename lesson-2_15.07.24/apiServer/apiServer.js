// 1. Import 'http' module
const http = require('http');
const url = require('url');

// Resource database
const customers = [
    {
        id: 1,
        name: "John Doe",
        address: "123 Main St, Springfield",
        numberOfAccounts: 2,
        balance: 1500.75
    },
    {
        id: 2,
        name: "Jane Smith",
        address: "456 Oak St, Metropolis",
        numberOfAccounts: 1,
        balance: 2500.50
    },
    {
        id: 3,
        name: "Alice Johnson",
        address: "789 Pine St, Gotham",
        numberOfAccounts: 3,
        balance: 3500.00
    },
    {
        id: 4,
        name: "Bob Brown",
        address: "101 Maple St, Star City",
        numberOfAccounts: 4,
        balance: 4500.25
    },
    {
        id: 5,
        name: "Charlie Davis",
        address: "202 Birch St, Central City",
        numberOfAccounts: 1,
        balance: 5500.75
    },
    {
        id: 6,
        name: "Diana Evans",
        address: "303 Cedar St, Coast City",
        numberOfAccounts: 2,
        balance: 6500.50
    },
    {
        id: 7,
        name: "Ethan Foster",
        address: "404 Elm St, Bludhaven",
        numberOfAccounts: 3,
        balance: 7500.00
    },
    {
        id: 8,
        name: "Fiona Green",
        address: "505 Spruce St, Keystone City",
        numberOfAccounts: 4,
        balance: 8500.25
    },
    {
        id: 9,
        name: "George Harris",
        address: "606 Ash St, Smallville",
        numberOfAccounts: 1,
        balance: 9500.75
    },
    {
        id: 10,
        name: "Hannah Martin",
        address: "707 Walnut St, Fawcett City",
        numberOfAccounts: 2,
        balance: 10500.50
    }
];

// 2. Create a server
const server = http.createServer((request, response) => {

    // API structure
    //  /api/v1/customers - GET
    //  /api/v1/customers/{id} - GET (ONE)
    //  /api/v1/customers - POST --> {body: {id:, name, address:,}}
    //  /api/v1/customers/{id} PUT --> {body: {id:, name, address:,...}}
    //  /api/v1/customers/{id} - DELETE

    // 1. Break-down URL to components

    const parsedUrl = url.parse(request.url, true);
    const pathname = parsedUrl.pathname;    // --> /api/v1/customers
    const medod = request.method;   // -->  GET 1



    // 2. Handle specific URL and METHOD request
    //  /api/v1/customers - GET(ALL)
    if (pathname === '/api/v1/customers' && method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        // 3. Responce  .JSON  responce
        response.end(JSON.stringify(customers));
        //  /api/v1/customers - GET
        //  /api/v1/customers/{id} - GET (ONE)
        // Example /api/v1/customers/1 - GET (ONE)
        // Example /api/v1/customers/2 - GET (ONE)

    } else if () {
// A. Extract id from URL
// B. 
        else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('API endpoint not found')
    }
});


// Start a server
const port = 3003;
server.listen(port, () => {

    console.log(`Server is runing on port http://localhost:${port}`);
});


