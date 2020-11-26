'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['name', 'password', 'email', 'localizacao', 'avatar', 'username', 'bio'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
