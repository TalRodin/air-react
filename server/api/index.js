const router = require('express').Router(); 

const Aircrafts = require('../api/aircrafts')
const Countries = require('../api/countries')

router.use('/aircrafts', Aircrafts)
router.use('/countries', Countries)


router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})
module.exports = router