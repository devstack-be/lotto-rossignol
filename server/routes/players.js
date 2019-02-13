import express from 'express'
import { Player } from '../sequelize'
const router = express.Router()

// GET ALL
router.get('', (req, res) => {
    let filters = {}
    if(Object.entries(req.query).length !== 0 && req.query.constructor === Object) {
        var limitSearch = parseInt(req.query._end - req.query._start)
        var offsetSearch = parseInt(req.query._start)
    
        filters = {
            offset: offsetSearch, limit: limitSearch,
            order: [
                [req.query._sort,req.query._order]
                ]
        }
    }
    Player.findAndCountAll(filters).then(players => {
        res.set('X-Total-Count', players.count)
        res.json(players.rows)
    })
})
//INSERT
router.post('', (req, res) => {
    Player.create({
        name: req.body.name,
        numbers: req.body.numbers
    }).then(player => res.json(player))
})
// DELETE
router.delete('/:id', (req, res) => {
    Player.destroy({
        where: {
          id: req.params.id
        }
    }).then(player => res.json(player))
})
//GET ONE
router.get('/:id', (req, res) => {
    Player.findById(req.params.id).then(player => {
        res.json(player) 
    })
})
//UPDATE
router.put('/:id', (req, res) => {
    Player.update({
        name: req.body.name,
        numbers: req.body.numbers
      }, {
        where: {
          id: req.params.id
        }
    }).then(Player.findById(req.params.id).then(player => res.json(player)))
})

export default router