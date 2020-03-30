'use strict'

const Task = use('App/Models/Task')

class TaskController {
  async index ({ request, response }) {
    const tasks = await Task.query().orderBy('id', 'desc').fetch()

    return tasks
  }

  async store ({ request, response }) {
    const data = request.only(['description'])

    const task = await Task.create(data)

    return task
  }

  async update ({ params, request, response }) {
    try {
      const task = await Task.findOrFail(params.id)

      const data = request.only(['checked'])

      task.merge(data)

      await task.save()

      return task
    } catch (error) {
      return response.status(error.status).send({
        error: {
          message: 'Não foi possível atualizar a tarefa'
        }
      })
    }
  }

  async delete ({ params, response }) {
    try {
      const task = await Task.findOrFail(params.id)

      await task.delete()

      return response.status(204).send()
    } catch (error) {
      return response.status(error.status).send({
        error: {
          message: 'Não foi possível deletar a tarefa'
        }
      })
    }
  }
}

module.exports = TaskController
