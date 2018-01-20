import * as express from 'express';

var router = express.Router();

router.get('/', (req, res, next) => {
 res.send(`request serverd: ${req.url}`);
});

export { router } ;