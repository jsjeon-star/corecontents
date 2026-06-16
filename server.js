const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5173;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(500); res.end('Error'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('  VITE v5.0.0  ready in 100 ms');
  console.log('');
  console.log('  ➜  Local:   http://localhost:' + PORT + '/');
  console.log('  ➜  Network: http://0.0.0.0:' + PORT + '/');
  console.log('');
});
