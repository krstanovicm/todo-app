import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

function TodoList({ todos, setTodos }) {
  const list = todos.map((todo) => (
    <Todo
      id={todo.id}
      name={todo.name}
      completed={todo.completed}
      key={todo.id}
      todos={todos}
      setTodos={setTodos}
    />
  ));
  return (
    <div className="todo-list">
      <ul className="list-el">
        {list}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  setTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export default TodoList;
