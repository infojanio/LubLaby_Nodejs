'use strict'

const RepositoriesStar = use('App/Models/RepositoriesStar')

class RepositoriesStarController {
  // listar as estrelas de um determinado repositório
  async index ({ params }) { // params serve p/ mostrar apenas as stars do projeto escolhido
    const star = await RepositoriesStar.query()
      .where('repository_id', params.repositories_id)
      .with('user')
      .fetch()

    return star
  }

  async store ({ params, request }) {
    const data = request.only([
      'user_id',
      'repository_id',
      'count'
    ])

    const star = await RepositoriesStar.create({ ...data, repository_id: params.repositories_id })
    return star
  }

  async show ({ params }) {
    const star = await RepositoriesStar.findOrFail(params.id)
    return star
  }

  async update ({ params, request }) {
    const star = await RepositoriesStar.findOrFail(params.id)
    const data = request.only([
      'user_id',
      'repository_id',
      'count'
    ])

    star.merge(data)
    await star.save()
    return star
  }

  async destroy ({ params }) {
    const star = await RepositoriesStar.findOrFail(params.id)
    await star.delete()
  }
}

module.exports = RepositoriesStarController
