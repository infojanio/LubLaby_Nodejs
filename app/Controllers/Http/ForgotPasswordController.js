'use strict'

const crypto = require('crypto')
const User = use('App/Models/User')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.created_at = new Date() // Não usei o token_created_at pq deu erro ao criar o timestemp

      await user.save()
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Este email não existe!' } })
    }
  }
}

module.exports = ForgotPasswordController
