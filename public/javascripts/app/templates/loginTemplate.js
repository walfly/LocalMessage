bb.Templates.LoginFormTemplate = _.template(''+
  '<h1>Log In</h1>' +
    '<form>' +
    '<%console.log(err)%>'+
      '<% if(err === 1){%>' +
        '<div style="color:red;">Invalid username and password</div>'+
      '<%}%>' +
    '<table>' +
      '<tbody><tr><td>Username</td><td><input type="text" name="username" id="username"></td></tr>' +
      '<tr><td>Password</td><td><input type="password" name="password" id="password"></td></tr>' +
    '</tbody></table>' +
    '</form>'+
    '<button class = "submit">submit</button>'
  );