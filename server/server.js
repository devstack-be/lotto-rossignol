import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
import pool from './connection'
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const router = express.Router()

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)

router.get('/api/players', function(req, res) {
  pool.getConnection(function(err, connection) {
      if (err) throw err // not connected!
    
      // Use the connection
      connection.query('SELECT * FROM players', function (error, results, fields) {
        // When done with the connection, release it.
        connection.release()
    
        // Handle error after the release.
        if (error) throw error

        return res.json(results)
        // Don't use the connection here, it has been returned to the pool.
      })
    })
})
router.get('/api/drawings', function(req, res) {
  pool.getConnection(function(err, connection) {
      if (err) throw err // not connected!
    
      // Use the connection
      connection.query('SELECT * FROM drawings', function (error, results, fields) {
        // When done with the connection, release it.
        connection.release()
    
        // Handle error after the release.
        if (error) throw error

        return res.json(results)
        // Don't use the connection here, it has been returned to the pool.
      })
    })
})

router.get('/cities', (req, res) => {
  const cities = [
    {name: 'New York City', population: 8175133},
    {name: 'Los Angeles',   population: 3792621},
    {name: 'Chicago',       population: 2695598}
  ]
  res.json(cities)
})

app.use(router)

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles)

app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
