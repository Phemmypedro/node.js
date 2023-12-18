const http = require("http");
const app = require("./app");

const httpServer = http.createServer(app);

const PORT = 5000;

httpServer.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
