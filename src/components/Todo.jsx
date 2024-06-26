import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            <div className="content">
                <p>{todo.text}</p>  {/* acessando a propriedade text do array */}
                <p className="category">({todo.category})</p>
            </div>
            <div>
                <button className='complete' onClick={() => completeTodo(todo.id)}>Feito</button>
                <button className='remove' onClick={() => removeTodo(todo.id)} >Delet</button>
            </div>
        </div>
    )
}

export default Todo