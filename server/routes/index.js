const router = require('koa-router')()
const rp = require('request-promise')

const url = 'http://api.pingcc.cn/'
router.get('/', async (ctx, next) => {
  await rp(url + '?name=1')
    .then(htmlString => {
      next()
      ctx.body = JSON.parse(htmlString)
    })
    .catch ((err) => {
      console.log(err)
    })
})

router.get('/xsname', async (ctx, next) => {
  let query = ctx.url.split('xsname=')[1]
  await rp(url + '?xsname=' + query)
    .then(htmlString => {
      next()
      ctx.body = JSON.parse(htmlString)
    })
    .catch ((err) => {
      console.log(err)
    })
})

router.get('/xsurl1', async (ctx, next) => {
  let query = ctx.url.split('xsurl1=')[1]
  await rp(url + '?xsurl1=' + query)
    .then(htmlString => {
      next()
      ctx.body = JSON.parse(htmlString)
    })
    .catch ((err) => {
      console.log(err)
    })
})

router.get('/xsurl2', async (ctx, next) => {
  let query = ctx.url.split('xsurl2=')[1]
  await rp(url + '?xsurl2=' + query)
    .then(htmlString => {
      next()
      ctx.body = JSON.parse(htmlString)
    })
    .catch ((err) => {
      console.log(err)
    })
})

router.get('/ysname', async (ctx, next) => {
  let query = ctx.url.split('ysname=')[1]
  await rp(url + '?ysname=' + query)
    .then(htmlString => {
      next()
      ctx.body = JSON.parse(htmlString)
    })
    .catch ((err) => {
      console.log(err)
    })
})

router.get('/ysurl', async (ctx, next) => {
  let query = ctx.url.split('ysurl=')[1]
  await rp(url + '?ysurl=' + query)
    .then(htmlString => {
      next()
      ctx.body = JSON.parse(htmlString)
    })
    .catch ((err) => {
      console.log(err)
    })
})

router.get('/mhname', async (ctx, next) => {
  let query = ctx.url.split('mhname=')[1]
  await rp(url + '?mhname=' + query)
    .then(htmlString => {
      next()
      ctx.body = JSON.parse(htmlString)
    })
    .catch ((err) => {
      console.log(err)
    })
})

router.get('/mhurl1', async (ctx, next) => {
  let query = ctx.url.split('mhurl1=')[1]
  await rp(url + '?mhurl1=' + query)
    .then(htmlString => {
      next()
      ctx.body = JSON.parse(htmlString)
    })
    .catch ((err) => {
      console.log(err)
    })
})

router.get('/mhurl2', async (ctx, next) => {
  let query = ctx.url.split('mhurl2=')[1]
  await rp(url + '?mhurl2=' + query)
    .then(htmlString => {
      next()
      ctx.body = JSON.parse(htmlString)
    })
    .catch ((err) => {
      console.log(err)
    })
})

module.exports = router
