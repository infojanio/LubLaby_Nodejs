'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    // Criptografa a senha
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  // Relacionamento de repositórios e usuário
  repository () {
    // um usuário pode ter vários repositórios
    return this.hasMany('App/Model/Repositories')
  }

  follower () {
    // um usuário pode ter vários seguidores
    return this.hasMany('App/Model/Follower')
  }

  following () {
    // um usuário pode seguir vários usuários
    return this.hasMany('App/Model/Following')
  }

  repository_stars () {
    // um usuário pode ter vários repositórios com estrela
    return this.hasMany('App/Model/RepositoriesStar')
  }
}

module.exports = User
