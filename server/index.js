const server = require('./server');

const PORT = 7000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});