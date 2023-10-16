// [!] ini REST API tanpa framework!

const http = require('http');
const PORT = 8000;

const server = http.createServer(async (req, res) => {
    // ...define your route here

    // set the request route
    if (req.url === "/api" && req.method === "GET") {
        // response headers
        res.writeHead(200, { "Content-Type": "application/json" });
        // set the response
        res.write("Hi there, This is a Vanilla Node.js API");
        // end the response
        res.end();
    }

    // if no route is present
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
})