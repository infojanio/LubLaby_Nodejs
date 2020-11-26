'use strict'

const Repository = use('App/Models/Repository')

class RepositoryController {
  /**
   * Show a list of all repositories.
   * GET repositories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  // retorna todos os repositórios
  async index ({ request, response, view }) {
    const repositories = await Repository.query() // carrega o relacionamento id
      .with('user') // busca todas as informações do usuário que criou o repositório
      .fetch() // finaliza a query()
    return repositories
  }

  // Criação do repositório
  async store ({ request, response, auth }) {
    const data = request.only(['name', 'description', 'public', 'slug'])
    const repositories = await Repository.create({ ...data, user_id: auth.user.id }) // user_id = usuário logado
    return repositories
  }

  // Retorna um repositório específico
  async show ({ params }) {
    const repository = await Repository.findOrFail(params.id)

    // mostra os dados das 2 tabelas que se relacionam
    await repository.load('user')
    await repository.load('repository_stars')

    return repository
  }

  // Atualização do repositório
  async update ({ params, request }) {
    const repository = await Repository.findOrFail(params.id) // busca o objeto
    const data = request.only(['name', 'description', 'public', 'slug'])

    repository.merge(data) // coloca as informações da requisição dentro do objeto
    await repository.save()
    return repository
  }

  // Excluiro repositório
  async destroy ({ params, request, response }) {
    const repository = await Repository.findOrFail(params.id) // busca o objeto
    await repository.delete()
  }
}

module.exports = RepositoryController
