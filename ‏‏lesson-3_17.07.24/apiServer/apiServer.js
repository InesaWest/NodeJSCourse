// 1- Insert http module
const http = require('http');
const url = require('url');

// 'customers' - Resource database

const customers = [
    { id: 1, name: 'John Doe', address: '123 Main St, Cityville', balance: 1000.00 },
    { id: 2, name: 'Jane Smith', address: '456 Elm St, Townsville', balance: 1500.50 },
    { id: 3, name: 'Michael Johnson', address: '789 Oak St, Villageton', balance: 500.25 },
    { id: 4, name: 'Emily Davis', address: '101 Pine St, Hamletville', balance: 3000.75 },
    { id: 5, name: 'David Brown', address: '222 Maple St, Suburbia', balance: 750.20 },
    { id: 6, name: 'John Doe', address: '123 Main St, Cityville', balance: 1000.00 },
    { id: 7, name: 'Jane Smith', address: '456 Elm St, Townsville', balance: 1500.50 },
    { id: 8, name: 'Michael Johnson', address: '789 Oak St, Villageton', balance: 500.25 },
    { id: 9, name: 'Emily Davis', address: '101 Pine St, Hamletville', balance: 3000.75 },
    { id: 10, name: 'David Brown', address: '222 Maple St, Suburbia', balance: 750.20 },
    { id: 11, name: 'Robert Taylor', address: '444 Birch St, Townville', balance: 800.60 },
    { id: 12, name: 'Jennifer Martinez', address: '555 Oak St, Cityville', balance: 2200.30 },
    { id: 13, name: 'William Garcia', address: '666 Pine St, Hamletville', balance: 1750.10 },
    { id: 14, name: 'Mary Hernandez', address: '777 Elm St, Countryside', balance: 900.45 }
];

// 2- Create a server
const server = http.createServer((request, response) => {
    // 1. Break-down URL to components
    const parsedUrl = url.parse(request.url, true);
    const pathname = parsedUrl.pathname; // --> /api/v1/customers
    const method = request.method; // --> GET


    // A. Extract id from URL based on standard REST API
    // 1. Identify the resource --> customers --> default
    // 2. Identify the id --> /{id}
    const arrUrlParts = pathname.split('/');
    const lastPart = arrUrlParts[arrUrlParts.length - 1];
    const lastlastPart = arrUrlParts[arrUrlParts.length - 2];

    let = route = '';
    if (lastPart === 'customers' || lastLastPart === 'customers') {
        route = lastlastPart === 'customers' ? '--customers--x--' : '--customers--';
    }
    /////
    switch (`${route}--${metode}--`) {
        case '--customers--GET--':

            if (customers) {
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(customers));
            } else {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end(JSON.stringify({ message: `Customers not found! ` }));
            }
            break;
        case '--customers--x--GET--':

            break;
        case '--customers--x--POST--':

            break;
        case '--customers--x--PUT--':

            break;
        case '--customers--x--DELETE--':

            break;
        default:
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end(JSON.stringify({ message: `Customer ${lastPart} not found!` }));
            break;
    }
    // 2. Handle specific URI and METHOD request
    // 3. Identify the method --> GET, POST, PUT, DELETE, PATCH
    // 4. Identify the query string --> ?name=John&age=30

    // 2.1 Handle requset on all resources - GET (ALL), POST
    if (lastPart === 'customers' || lastlastPart === 'customers') {
        if (lastPart === 'customers') {
            if (method === 'GET') { // GET (ALL)
                if (customers) {
                    response.writeHead(200, { 'Content-Type': 'application/json' });
                    response.end(JSON.stringify(customers));
                } else {
                    response.writeHead(404, { 'Content-Type': 'text/plain' });
                    response.end(JSON.stringify({ message: `Customers not found! ` }));
                }
            } else if (method === 'POST') { // POST (CREATE)
                // A. Expecting a full new response
                // - ID is no sent
                // C. Send the new customer object as JSON to the response
                let body = '';
                request.on('data', chunk => body += chunk.toString());
                request.on('end', () => {

                    const newID = customers.length + 1;
                    const newCustomer = JSON.parse(body);

                    customers.push(newCustomer);

                    response.writeHead(201, { 'Content-Type': 'application/json' });
                    response.end(JSON.stringify(newCustomer));
                })
            }
        } else {
            if (method === 'GET') { // GET (ONE)
                // lastPart is a string
                const customer = customers.find(c => c.id === parseInt(lastPart));

                if (customer) {
                    response.writeHead(200, { 'Content-Type': 'application/json' });
                    response.end(JSON.stringify(customer));
                } else {
                    response.writeHead(404, { 'Content-Type': 'text/plain' });
                    response.end(JSON.stringify({ message: `Customer ${lastPart} not found!` }));
                }

            } else if (method === 'PUT') { // PUT (UPDATE)
                // A. Extract body from request
                // B. Add new customer to the database
                // C. Send the new customer object as JSON to the response

            } else if (method === 'DELETE') { // DELETE (DELETE)
                // A. Extract body from request
                // B. Add new customer to the database
                // C. Send the new customer object as JSON to the response

            }
        }

        // Assume identifier of resouce
    } else {
        // find resource by id
        const customer = customers.find(c => c.id);

        // if id is not found - return 404

    }
});

// 4- Start the server
const PORT = 3005
server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});