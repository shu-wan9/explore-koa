import Koa, { Context } from 'koa'

const app = new Koa()

app.use(async (ctx: Context, next) => {
  // await next()
  // ctx.body = 'hi~'

  ctx.body = {
    author: 'shuwan9'
  }

  ctx.set({
    'Content-Type': 'text/plain'
  })
})
app.use(async (ctx: Context) => {
  ctx.set('x-author-name', 'shuwan9')
  ctx.set({ 'x-author-age': '18', 'x-anthor-sex': 'male' })
})

app.use(async (ctx) => {})

app.listen(3000, () => {
  console.log('start')
})
