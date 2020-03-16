const express = require('express')
const router = express.Router()

const Employee = require('../models/Employee')

const knex = Employee.knex()

router.get('/employees', (req, res) => {
    Employee.query().then(employees => {res.json(employees)})
})

router.post('/employees', (req, res) => {
    Employee.query().insertAndFetch(req.body)
        .then(employee => {res.json(employee)})
})

router.patch('/employees/:id', (req, res) => {
    Employee.query()
    .patchAndFetchById(req.params.id, req.body)
    .then(employee => res.json(employee))
})

module.exports = { router: router }