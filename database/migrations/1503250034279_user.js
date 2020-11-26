'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name', 480).notNullable()
      table.string('username', 160).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 254)
      table.string('token')
      table.timestamps('token_created_at')
      table.string('localizacao', 580)
      table.string('avatar', 580)
      table.string('bio', 450)
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
