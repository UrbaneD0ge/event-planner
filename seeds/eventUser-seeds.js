const { eventUser } = require('../models');

const eventUserData = [
    {
        users_id: 1,
        events_id: 1
    },
    {
        users_id: 2,
        events_id: 1
    },
    {
        users_id: 3,
        events_id: 1
    }
]

const seedEventUser = () => eventUser.bulkCreate(eventUserData)

module.exports = seedEventUser