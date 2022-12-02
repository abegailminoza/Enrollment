const koa = require('koa');
const {koaBody} = require('koa-body');
const cors = require('@koa/cors');

const app = new koa();

app.use(koaBody());
app.use(cors());

let user = require('./user.js');

app.use(user.routes()).use(user.allowedMethods);

app.listen(3001, function() {
    console.log("Server at http://localhost:3001/user")
});