const { Model } = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class Employee extends Model {
    static get tableName() {
        return 'employees'
    }
}

module.exports = Employee