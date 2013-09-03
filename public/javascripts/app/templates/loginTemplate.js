bb.Templates.LoginFormTemplate = _.template(''+
  '<h1>Log In</h1>' +
    '<form method="post" action="/login">' +
      '<% if (err && err === "1") {%>' +
        '<div style="color:red;">Invalid username and password</div>'+
      '<%}%>' +
    '<table>' +
      '<tbody><tr><td>Username</td><td><input type="text" name="username"></td></tr>' +
      '<tr><td>Password</td><td><input type="password" name="password"></td></tr>' +
      '<tr><td></td><td><input type="submit" name="Login"></td></tr>' +
    '</tbody></table>' +
    '</form>'
  );