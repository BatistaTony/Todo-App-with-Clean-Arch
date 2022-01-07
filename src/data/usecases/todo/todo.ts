import { Task } from '@/domain/models/task'
import { TodoApp } from '@/domain/usecases/todo'

export interface StorageType extends WindowLocalStorage {

}

export class Todo implements TodoApp {
//   constructor (private readonly store: StorageType) {}

  tasks: Task[] = []

  showTasks (): Task[] {
    return this.tasks
  }

  createTask (task: Task): Task | undefined {
    const taskAlreadyExist = this.tasks.find(tsk => tsk.id === task.id)
    if (taskAlreadyExist?.title) return undefined
    this.tasks.push(task)
    console.log(this.tasks)
    return task
  }

  toggleTaskStatus (id: string): Task | undefined {
    const taskIndex = this.tasks.findIndex(task => task.id === id)
    const task = this.tasks[taskIndex]

    const newObjTask = {
      ...task,
      done: !task?.done
    }

    this.tasks[taskIndex] = newObjTask

    const newTaskOnTheList = this.tasks[taskIndex]
    console.log('last item', newTaskOnTheList)
    return newTaskOnTheList
  }

  deleteTask (id: string): Task | undefined {
    const taskIndex = this.tasks.findIndex(task => task.id === id)
    if (taskIndex < 0) return undefined
    const task = this.tasks.splice(taskIndex, 1)
    return task[0]
  }
}
