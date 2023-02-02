const todoItemFactory = (title, description, dueDate, priorityRank, done = false) => {

    const editAttribute = (attribute) => {
        const newAttribute = prompt('', `${attribute}`)
        this.attribute = newAttribute
    }

    return {title, description, dueDate, priorityRank, done, editAttribute};
}

const projectFactory = (title) => {

    const todoList = [];

    const addTodo = (todo) => {
        const newTodo = todoItemFactory(todo);
        todoList.push(newTodo);
    }

    const deleteTodo = (index) => {
        todoList.splice(index, 1);
    }

    


    return {todoList, addTodo, deleteTodo}
}