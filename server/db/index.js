const db = require('./db.js');
const cities = require('./cities');
const State = require('./models/State');
const City = require('./models/City');

State.hasMany(City);
City.belongsTo(State);

const syncAndSeed = async () => {
    await db.sync({force: true});
    let stateArr = [];
    let cityArr = [];
    cities.forEach(city => {
        stateArr.push(State.create({
            abbr: city.stateAbbrev
        }));
    });
    await Promise.all(stateArr);
    cities.forEach(async function (city) {
        const state = await State.findAll({
            where: 
                {abbr : city.stateAbbrev}
        });
        const stateId = state[0].id;
        city.capital && cityArr.push(City.create({
            name: city.capital,
            capital: true,
            stateId: stateId
        }));
        city.city && cityArr.push(City.create({
            name: city.city,
            capital: false,
            stateId: stateId
        }));
    });
    await Promise.all(cityArr)
}

module.exports = {
    db,
    syncAndSeed,
    State,
    City
}