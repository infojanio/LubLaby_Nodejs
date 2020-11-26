'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Following extends Model {
  user () {
    // quem segue pode seguir vários usuários
    return this.belongsToMany('App/Models/User')
  }

  following () {
    // quem segue pode ter vários usuários associadas a ele
    return this.hasMany('App/Model/User')
  }
}

module.exports = Following
