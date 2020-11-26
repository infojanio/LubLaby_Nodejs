'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Follower extends Model {
  user () {
    // o seguidor pertence a vários usuários
    return this.belongsToMany('App/Models/User')
  }

  follower () {
    // um seguidor pode ter vários usuários associadas a ele
    return this.hasMany('App/Model/User')
  }
}

module.exports = Follower
