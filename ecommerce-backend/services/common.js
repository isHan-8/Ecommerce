const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODJhOWRkOWJmOGZhMzAxOGYxMDNkZiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxOTg0MDA1N30.bIJWkquwe1yBOqgsscvxNHK5lSrY3n1uY4kbgrY4QjA"
  return token;
};
