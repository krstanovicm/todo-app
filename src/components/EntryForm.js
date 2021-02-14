import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function EntryForm(props) {
  const [newEntry, setNewEntry] = useState('');

  function addTodo(todo) {
    const newTodo = { id: nanoid(), name: todo, completed: false };
    props.setTodos([...props.todos, newTodo]);
  }

  function handleChange(e) {
    setNewEntry(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(newEntry);
    setNewEntry('');
  }

  return (
    <div className="entry-form">
      <h1>To-do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new To-do..."
          required
          maxLength="45"
          value={newEntry}
          onChange={handleChange}
        />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

EntryForm.propTypes = {
  setTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export default EntryForm;
