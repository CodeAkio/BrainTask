'use strict'

const Route = use('Route')

Route.get('/tasks', 'TaskController.index')
Route.post('/tasks', 'TaskController.store')
Route.put('/tasks/:id', 'TaskController.update')
