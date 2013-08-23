var homepage = require('../controllers/index.js'),
    createAccount = require('../controllers/createAccount.js');


module.exports = function (app){
  app.get('/', homepage);
  app.get('/createAccount', createAccount.page);
  app.post('/createAccount', createAccount.submit);
}