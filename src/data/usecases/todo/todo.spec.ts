import { Todo } from './todo'
import faker from 'faker'

describe('Make sure todoApp is working correct when', () => {
  const todo = new Todo()

  describe('Create a task', () => {
    it('create a new task', () => {
      const taskObj = {
        id: faker.internet.password(),
        title: faker.name.title(),
        status: false,
        created_at: new Date()
      }

      const task = todo.createTask(taskObj)

      expect(task).toEqual(taskObj)
    })

    it('should fail if the task already exist', () => {
      const id = faker.internet.password()

      const taskObj = {
        id,
        title: faker.name.title(),
        status: false,
        created_at: new Date()
      }

      const taskObj1 = {
        id,
        title: faker.name.title(),
        status: false,
        created_at: new Date()
      }

      todo.createTask(taskObj)
      const task = todo.createTask(taskObj1)

      expect(task).toBeFalsy()
    })
  })

  describe('Toggle Task status', () => {
    it('First status of the task is false', () => {
      const id = faker.internet.password()

      const taskObj = {
        id,
        title: faker.name.title(),
        done: false,
        created_at: new Date()
      }

      const task = todo.createTask(taskObj)
      if (!task) return
      expect(task.done).toBe(false)
    })

    it('mark task as done and undone again', () => {
      const id = faker.internet.password()

      const taskObj = {
        id,
        title: faker.name.title(),
        done: false,
        created_at: new Date()
      }

      todo.createTask(taskObj)

      const taskWithStatus = todo.toggleTaskStatus(id)
      if (!taskWithStatus) return
      expect(taskWithStatus.done).toBe(true)

      const taskWithStatus2 = todo.toggleTaskStatus(id)
      if (!taskWithStatus2) return
      expect(taskWithStatus2.done).toBe(false)
    })
  })

  describe('Delete Task', () => {
    it('should delete a task from tasks list', () => {
      const id = faker.internet.email()

      const taskObj1 = {
        id,
        title: faker.name.title(),
        status: false,
        created_at: new Date()
      }

      const taskObj2 = {
        id: faker.internet.email(),
        title: faker.name.title(),
        status: false,
        created_at: new Date()
      }

      todo.createTask(taskObj1)
      todo.createTask(taskObj2)

      const deletedTask = todo.deleteTask(id)

      expect(deletedTask).toEqual(taskObj1)
    })

    it('should fail to delete if the task does not exist', () => {
      const id = faker.internet.email()

      const deletedTask = todo.deleteTask(id)

      expect(deletedTask).toBeFalsy()
    })
  })
})
