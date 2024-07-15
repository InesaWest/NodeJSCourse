// 1. Insert http module
const http = require ("http");


//2. Create a Server.
const server = http.createServer((request,response) => {

// Create a defult request/response
response.end('Hello Word');

});



// Start a server
const port = 3000;
server.listen(port, () => {

    console.log (`Server is runing on port http://localhost:${port}`)
});

