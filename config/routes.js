var homepage = require('../controllers/index.js'),
    login = require('../controllers/login.js'),
    checkSession = require('../controllers/checkSession.js'),
    createAccount = require('../controllers/createAccount.js');


module.exports = function (app){
  app.get('/', checkSession, homepage);

  app.get('/createAccount', checkSession, createAccount.page);
  app.post('/createAccount', checkSession, createAccount.submit);

  app.get('/login', checkSession, login.page);
}