const Router = require('koa-router');

const router = new Router({
    prefix: '/user'
});

let id = 1;

let user = [
    {id: id++, name: "Abegail", lastname: "Minoza", edit: false}
]; 

router.get('/', (ctx, next) => {
    ctx.body = user;
    next();
});

router.post('/create', (ctx, next) => {
    console.log(ctx.request.body);
    if(!ctx.request.body.name || !ctx.request.body.lastname)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Field";
        console.log("Missing Field");
    }
    else
    {
        user.push({id: id++, name: ctx.request.body.name, lastname: ctx.request.body.lastname, edit: false});
        ctx.response.status = 201;
        ctx.body = "Successfully Added User";
        console.log("Successfully Added User");
    }
    next();
});

router.post('/delete', (ctx, next) => {
    console.log(ctx.request.body);
    if(!ctx.request.body.id)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        var index = user.findIndex(x => x.id == ctx.request.body.id);
        console.log(index)
        user.splice(index, 1);
        ctx.response.status = 201;
        ctx.body = "user Deleted";
        console.log("User Deleted");
    }
    next();
});

router.post('/update', (ctx, next) => {
    if(!ctx.request.body.name || !ctx.request.body.lastname || !ctx.request.body.id)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        ctx.response.status = 201;
        ctx.body = "user Deleted";
        var index = user.findIndex(x => x.id == ctx.request.body.id);
        user[index].name = ctx.request.body.name;
        user[index].lastname =ctx.request.body.lastname;
        console.log("User Updated");
    }
    next();
});

module.exports = router;