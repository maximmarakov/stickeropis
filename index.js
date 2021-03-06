process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

const next = require('next');

const { setupServer } = require('./server');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app
    .prepare()
    .then(() => setupServer(app));
