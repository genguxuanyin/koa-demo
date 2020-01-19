const Koa = require('koa')

const app = new Koa();

app.use(async ctx => {
  ctx.body = {
    name:'zx',
    sex:'male',
    age:18
  };
})

app.listen(3000)
