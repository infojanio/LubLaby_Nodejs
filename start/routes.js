'use strict'

const Route = use('Route')

// rota para salvar usuários
Route.post('users', 'UserController.store')

// rota para criar uma sessão de autenticação
Route.post('sessions', 'SessionController.store')

// rota para criar uma sessão de autenticação
Route.post('passwords', 'ForgotPasswordController.store')

// Rotas acessíveis apenas quando o usuário estiver logado
Route.group(() => {
  Route.resource('repositories', 'RepositoryController').apiOnly()

  Route.resource('repositories.stars', 'RepositoriesStarController').apiOnly() // só tem stars se tiver repositories
}).middleware(['auth']) // chama todos as rotas possíveis
