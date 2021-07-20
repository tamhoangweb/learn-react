import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {
        todoList.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))
      }
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
};

export default TodoList;