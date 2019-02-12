import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'

import routePlayers from './routes/players'
import routeDrawings from './routes/drawings'

const app = express()
const staticFiles = express.static(path.join(__dirname, '../../client/build'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(staticFiles)

app.use('/api/players', routePlayers)
app.use('/api/drawings', routeDrawings)

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles)

// Start App
app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})