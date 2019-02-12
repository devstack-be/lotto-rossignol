import express from 'express'
import pool from '../connection'
import { Player } from '../sequelize'

const router = express.Router()

// GET ALL
router.get('', (req, res) => {
    Player.findAll().then(players => res.json(players))
})
//INSERT
router.post('', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err)
            return
        }

        let data = [[req.body.name, req.body.numbers]];
        // Use the connection
        connection.query("INSERT INTO players (name,numbers) VALUES ?", [data], (error, results, fields) => {
            // Handle error after the release.
            if (error) throw error
            connection.query('SELECT * FROM players WHERE id = ' + results.insertId, (error, results, fields) => {
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
router.delete('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err)
            return
        }
        // Use the connection
        connection.query('DELETE FROM players WHERE id = ' + req.params.id, (error, results, fields) => {
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
router.get('/:id', (req, res) => {
    pool.getConnection( (err, connection) => {
        if (err) {
            console.log(err)
            return
        }
        // Use the connection
        connection.query('SELECT * FROM players WHERE id = ' + req.params.id, (error, results, fields) => {
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
router.put('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err)
            return
        } // not connected!
        let sql = `UPDATE players
             SET name = ?, numbers = ?
             WHERE id = ?`;

        let data = [req.body.name, req.body.numbers, req.params.id];
        // Use the connection
        connection.query(sql, data, (error, results, fields) => {
            // Handle error after the release.
            if (error) throw error
            connection.query('SELECT * FROM players WHERE id = ' + req.params.id, (error, results, fields) => {
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

export default router