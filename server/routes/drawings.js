import express from 'express'
import { Drawing } from '../sequelize'
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
    Drawing.findAndCountAll(filters).then(drawings => {
        res.set('X-Total-Count', drawings.count)
        res.json(drawings.rows)
    })
})
//INSERT
router.post('', (req, res) => {
    Drawing.create({
        date: req.body.date,
        numbers: req.body.numbers
    }).then(drawing => res.json(drawing))
})
// DELETE
router.delete('/:id', (req, res) => {
    Drawing.destroy({
        where: {
          id: req.params.id
        }
    }).then(drawing => res.json(drawing))
})
//GET ONE
router.get('/:id', (req, res) => {
    Drawing.findById(req.params.id).then(drawing => {
        res.json(drawing) 
    })
})
//UPDATE
router.put('/:id', (req, res) => {
    Drawing.update({
        date: req.body.date,
        numbers: req.body.numbers
      }, {
        where: {
          id: req.params.id
        }
    }).then(Drawing.findById(req.params.id).then(drawing => res.json(drawing)))
})

export default router