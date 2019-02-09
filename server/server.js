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

// GET ALL
router.get('/api/players', function(req, res) {
  pool.getConnection(function(err, connection) {
      if (err) {
        console.log(err)
        return
      }
    
      // Use the connection
      connection.query('SELECT * FROM players', function (error, results, fields) {
        connection.release()
        // Handle error after the release.
        if (error) throw error

        res.set('X-Total-Count', results.length)
        return res.json(results)
        // Don't use the connection here, it has been returned to the pool.
      })
    })
})
// GET ALL
router.get('/api/drawings', function(req, res) {
  pool.getConnection(function(err, connection) {
      if (err) {
        console.log(err)
        return
      }
    
      // Use the connection
      connection.query('SELECT * FROM drawings', function (error, results, fields) {
        connection.release()
        // Handle error after the release.
          if (error) throw error

        res.set('X-Total-Count', results.length)
        return res.json(results)
        // Don't use the connection here, it has been returned to the pool.
      })
    })
})
//INSERT
router.post('/api/players', function(req, res) {
  pool.getConnection(function(err, connection) {
    if (err) {
      console.log(err)
      return
    }

    let data = [[req.body.name,req.body.numbers]];
    // Use the connection
    connection.query("INSERT INTO players (name,numbers) VALUES ?", [data], function (error, results, fields) {
          // Handle error after the release.
      if (error) throw error
      connection.query('SELECT * FROM players WHERE id = '+results.insertId, function (error, results, fields) {
        // When done with the connection, release it.
        connection.release()
        // Handle error after the release.
        if (error) throw error
        return res.json(results[0])
        // Don't use the connection here, it has been returned to the pool.
      })
    })
  })
})
// DELETE
router.delete('/api/players/:id', function(req, res) {
  pool.getConnection(function(err, connection) {
      if (err) {
        console.log(err)
        return
      }
      // Use the connection
      connection.query('DELETE FROM players WHERE id = '+req.params.id, function (error, results, fields) {
        // When done with the connection, release it.
        connection.release()
    
        // Handle error after the release.
        if (error) throw error
        
        return res.json(results)
        // Don't use the connection here, it has been returned to the pool.
      })
    })
})
//GET ONE
router.get('/api/players/:id', function(req, res) {
  pool.getConnection(function(err, connection) {
      if (err) {
        console.log(err)
        return
      }
      // Use the connection
      connection.query('SELECT * FROM players WHERE id = '+req.params.id, function (error, results, fields) {
        // When done with the connection, release it.
        connection.release()
    
        // Handle error after the release.
        if (error) throw error
        return res.json(results[0])
        // Don't use the connection here, it has been returned to the pool.
      })
    })
})
//UPDATE
router.put('/api/players/:id', function(req, res) {
  pool.getConnection(function(err, connection) {
      if (err) {
        console.log(err)
        return
      } // not connected!
      let sql = `UPDATE players
           SET name = ?, numbers = ?
           WHERE id = ?`;
 
      let data = [req.body.name,req.body.numbers,req.params.id];
      // Use the connection
      connection.query(sql, data, function (error, results, fields) {
            // Handle error after the release.
        if (error) throw error
        connection.query('SELECT * FROM players WHERE id = '+req.params.id, function (error, results, fields) {
          // When done with the connection, release it.
          connection.release()
      
          // Handle error after the release.
          if (error) throw error
          return res.json(results[0])
          // Don't use the connection here, it has been returned to the pool.
        })
        // Don't use the connection here, it has been returned to the pool.
      })
    })
})
app.use(router)

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles)

app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
