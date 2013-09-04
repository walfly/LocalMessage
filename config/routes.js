var homepage = require('../controllers/index.js'),
    login = require('../controllers/login.js'),
    user = require('../controllers/user.js'),
    checkSession = require('../controllers/checkSession.js'),
    createAccount = require('../controllers/createAccount.js'),
    messages = require('../controllers/messages.js');


module.exports = function (app){
  app.get('/', checkSession.entry, homepage);

  app.get('/createAccount', checkSession.entry, createAccount.page);
  app.post('/createAccount', createAccount.submit);

  app.get('/login', checkSession.entry, login.page);
  app.post('/login', login.submit);

  app.get('/member/:latlng/:id', checkSession.member, user.login);

  app.get('/messages', messages.collections);
  app.get('/messages/:id', messages.model);
  app.get('/messages/:bot/:top', messages.local);

}