import { Task } from '../models/task'

export interface TodoApp {
  showTasks: () => Task[]
  createTask: (task: Task) => Task | undefined
  deleteTask: (id: string) => Task | undefined
  toggleTaskStatus: (id: string) => Task | undefined
}
