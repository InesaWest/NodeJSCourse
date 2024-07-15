const WebSocket = require('ws');
const http = require('http');
const path = require('path');
const fs = require('fs');


// 1. Create ServerS
const server = http.createServer((request, response) => {

    // 3.1 Parse URL and determine filename
    // 3.2 If no 'path' is defined, return 'index.html'

    // Ternary condition
    const url = request.url === '/' ? 'index.html' : request.url;

    // http://localhost:3006/file.html ==> c:\...\file.html
    // __dirname = 'c:\_nodejs_course\Lesson 1 - 8.7.24\fileServer'
    // __dirname = 'c:\_nodejs_course\Lesson 1 - 8.7.24\fileServer\public'
    // __dirname = 'c:\_nodejs_course\Lesson 1 - 8.7.24\fileServer\public\file.html'
    const filePath = path.join(__dirname, "public", url);
    const fileExt = path.extname(filePath);
    console.log(`filePath: ${filePath}`);

    // Set the corret response content type
    let contentType = "";

    switch (fileExt) {
        case ".css":
            contentType = "text/css";
    }

    // 3.3 ELSE look for the desired file
    // Read file asynchronously
    fs.readFile(filePath, (error, content) => {
        // 1. Check for errors, if error exists return 404.html
        if (error != null) {
            // Check if file doesn't exist
            if (error.code === 'ENOENT') {
                const errorFile = path.join(__dirname, "public", "404.html");
                fs.readFile(errorFile, (err, data) => {
                    // Assumption, all is well
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(data, 'utf8');
                });
            } else {
                // DEFAULT error handling
                response.writeHead(500);
                response.end(`Server error: ${error.code}`);
            }
        } else {
            // 2. If all is well, return file
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf8');
        }
    });
});

// 2 Initialize the WS Server
const wss = new WebSocket.Server({ server });

// 3 ---- Handling Client connection
wss.on('connection', ws => {
    // A
    ws.on('message', message => {

        console.log(`Resived ${message}`);

        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // B Send 'connection' message
    console.log(`Client connected`);
    ws.send('Welcome the chat');
})



//  ---    Start the Server
const port = 3003;
server.listen(port, () => {

    console.log(`Server is runing on port http://localhost:${port}`)
});
