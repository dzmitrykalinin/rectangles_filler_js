const port = 4040, keepAliveTimeout = 61 * 1000,
    http = require('http'),
    app = require('./app');

const server = http.createServer(app);
server.keepAliveTimeout = keepAliveTimeout;

server.listen(port, () => console.log(`listening on port ${port}!`));