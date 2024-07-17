const http = require('http');
const url = require('url');
const { apiHandlerServer } = require('./apiHandler');
const { staticServerFileHandler } = require('./staticFileHandler');
// const { chatHandlerServer } = require('./chatHandler');

function startServer(customPort = 3006) {
    const PORT = customPort;

    const server = http.createServer((req, res) => {
        const parsedUrl = url.parse(req.url, true);
        const pathname = parsedUrl.pathname;
        const method = req.method;

        if (pathname.startsWith('/api/')) {
            apiServerHandler(req, res);
        } else {
            staticServerFileHandler(req, res);
        }
    });

    //   chatHandlerServer(server);

    server.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
}

module.exports = { startServer };