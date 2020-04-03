const  { Router } = require('express')
const Link = require('../models/Links')
const router = Router()

router.get('/:code', async (req, res) => {
  try {
    const link = await Link.findOne({ code: req.params.code })

    if (link) {
      link.cliks++
      await link.save()
      return res.redirect(link.from)
    } 

    res.status(400).json('Ссылка не найдена')
  } catch (error) {
    res.status(500).json({ message: 'Что то пошло не так... =(' })
  }
})

module.exports = router
