const auth = require('basic-auth');

const env = process.env;
const userid = env.USERID;
const pass = env.PASS;

// https://qiita.com/kmagai/items/95481a3b9fd97e4616c9
const myauth = {[userid]: {password: pass}};

module.exports = function (request, response, next) {
  const user = auth(request);
  if (!user || !myauth[user.name] || myauth[user.name].password !== user.pass) {
    response.set('WWW-Authenticate', 'Basic realm="example"');
    return response.status(401).send();
  }
  return next();
};

