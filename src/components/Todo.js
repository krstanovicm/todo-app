import React from 'react';
import PropTypes from 'prop-types';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo({
  name, id, completed, todos, setTodos,
}) {
  function deleteTodo(selectedId) {
    const remainingTodos = todos.filter((todo) => selectedId !== todo.id);
    setTodos(remainingTodos);
  }
  function toogleCompleted(selectedId) {
    const updatedTodos = todos.map((todo) => {
      if (selectedId === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={() => toogleCompleted(id)}
      />
      <span className="todo-text" style={{ textDecoration: completed ? 'line-through' : '' }}><h2>{name}</h2></span>
      <DeleteForeverIcon style={{ fontSize: 35, color: '#D9B44A' }} onClick={() => deleteTodo(id)} />
    </div>
  );
}

Todo.propTypes = {
  setTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
