'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Repository extends Model {
  // Relacionamento entre repository e user
  user () {
    // o repositório pertence a um usuário
    return this.belongsTo('App/Models/User')
  }

  repository_stars () {
    // um repositório pode ter várias estrelas associadas a ele
    return this.hasMany('App/Models/RepositoriesStar')
  }
}
// Repository.user
module.exports = Repository
