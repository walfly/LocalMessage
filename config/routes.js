var homepage = require('../controllers/index.js'),
    login = require('../controllers/login.js'),
    checkSession = require('../controllers/checkSession.js'),
    createAccount = require('../controllers/createAccount.js'),
    messages = require('../controllers/messages.js');


module.exports = function (app){
  app.get('/', checkSession, homepage);

  app.get('/createAccount', checkSession, createAccount.page);
  app.post('/createAccount', checkSession, createAccount.submit);

  app.get('/login', checkSession, login.page);
  app.post('/login', checkSession, login.submit);

  app.get('/messages', messages.collections);
  app.get('/messages/:id', messages.model);
  app.get('/messages/:bot/:top', messages.local);

}