import Koa from 'koa'

const app = new Koa()

app.use(async (ctx, next) => {
  // await next()
  ctx.body = 'hi~'
})
app.use(async (ctx) => {
  ctx.res.setHeader('X-Author-Name', 'shuwan9')
})

app.use(async (ctx) => {})

app.listen(3000, () => {
  console.log('start')
})
