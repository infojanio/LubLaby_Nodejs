'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RepositoriesStar extends Model {
  // Relacionamento entre repository e star

  // Relacionamento entre repository e user
  user () {
    // o repositório pertence a um usuário
    return this.belongsTo('App/Models/User')
  }

  repository () {
    // o estrela(star) pertence a um repositório
    return this.belongsTo('App/Models/Repository')
  }
}

module.exports = RepositoriesStar
