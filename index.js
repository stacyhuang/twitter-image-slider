// register babel to have ES6 support on the server
require('dotenv').config();
require('babel-register');
require('./server/index');
