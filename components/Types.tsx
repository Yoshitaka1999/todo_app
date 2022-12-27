export type Task = {
    id: number
    title: string
    done: boolean
}

export type Todo = {
    title: string
    id: number
    taskLists: any
    todoLists: any
}