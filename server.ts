import * as express from 'express';
import * as indexRoute from "./routes/index";

class Server {
  public app: express.Application;
  public router: express.Router;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.app.use(this.router);
  }

  addRoute(path, route) {
    this.router.use('/', route);
  }
  
  start(port) {
    this.app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }
}


let server = new Server();

var index: indexRoute.Index = new indexRoute.Index();

server.addRoute('/', index.index.bind(index.index));
server.start(3001);