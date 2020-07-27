const Koa = require('koa')
const app = new Koa()

let ctx_1 = null
let ctx_2 = null

app.use(async (ctx, next) => {
  await next()
  ctx_1 = ctx
  console.log(1, 'ctx_1')
  const ctx_3 = app.createContext(app.req, app.res)
  console.log(ctx_1 === ctx_2, ctx_1 === ctx_3)
  ctx.body = 'hello'
})
app.use(async (ctx, next) => {
  ctx_2 = ctx
  console.log(2, 'ctx_2')
  ctx.body = 'hello~'
})

app.listen(3000, () => {
  console.log('start')
})
