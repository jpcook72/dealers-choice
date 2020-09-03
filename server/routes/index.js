const router = require("express").Router()
const { db, State, City } = require('../db')

router.get('/:abbr', async (req,res,next) => {
    const state = await State.findAll({
        where: 
            {abbr : req.params.abbr}
    });
    const stateId = state[0].id;
    const cities = await City.findAll({
        where: {
            stateId: stateId
        },
        include: {
            model: State
        }
    });
    res.send(cities);
})

module.exports = router
