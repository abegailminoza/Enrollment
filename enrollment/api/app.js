const koa = require('koa');
const {koaBody} = require('koa-body');
const cors = require('@koa/cors');
const parser = require('koa-bodyparser');

const app = new koa();

app.use(koaBody());
app.use(cors());

let user = require('./user.js');

app.use(user.routes()).use(user.allowedMethods);

app.listen(3001, function() {
    console.log("Server at http://localhost:3001/user")
});

const mongo = new koa();

mongo.use(cors());
mongo.use(parser());

let cdata = require('./mongoapi.js');

mongo.use(cdata.routes()).use(cdata.allowedMethods);

mongo.listen(3002, () => console.log('http://localhost:3002/user'));