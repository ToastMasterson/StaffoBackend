
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', t => {
      t.increments('id').primary()
      t.string('firstName')
      t.string('middleInitial')
      t.string('lastName')
      t.string('birthDate')
      t.string('startDate')
      t.bool('status')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees')
};
