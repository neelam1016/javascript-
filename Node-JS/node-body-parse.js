const fs = require("fs");
const http = require("http");
const PORT = 8899;
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.write('<html> <body> <form action="/userdata" method="post"> User Name<input type="text" name="uname"/><input type="submit" value:"Submit"/> </form> </body></html>');
    return res.end();
    }
    if(url === "/userdata" && req.method === "POST") {
        let bodyData = [];
        req.on('data', (chunks) => {
            bodyData.push(chunks);
        });
        req.on("end", () => {
            parsedData = bodyData.toString()
            const username = parsedData.split('=')[1];
            fs.writeFileSync('uname.txt', username)
        });
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.write('<html> <body> <h2> Hello </h2></body> </html>');
   res.end();
})
server.listen(PORT, (err) => {
    if (err) throw err
    else console.log(`server work on ${PORT}`)
})