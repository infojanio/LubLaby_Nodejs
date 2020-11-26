'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokensSchema extends Schema {
  up () {
    this.create('tokens', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('type', 180).notNullable()
      table.timestamps('data_requisicao')
    })
  }

  down () {
    this.drop('tokens')
  }
}

module.exports = TokensSchema
