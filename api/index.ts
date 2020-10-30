import express from 'express'

import trackRoutes from './routes/track'

const app = express()

app.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

app.use(trackRoutes)

export default app
