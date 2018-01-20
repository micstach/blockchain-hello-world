import * as express from 'express';
import * as Index from './routes/Index';

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
  }

  addRoute(path, router) {
    this.app.use('/', Index.router);
  }
  
  start(port) {
    this.app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }
}


let server = new Server();

server.addRoute('/', Index.router);
server.start(3001);