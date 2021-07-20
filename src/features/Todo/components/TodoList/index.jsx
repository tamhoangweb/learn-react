import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const TodoList = ({ todoList, onTodoClick }) => {
  return (
    <ul>
      {
        todoList.map((todo, index) => (
          <li onClick={() => { onTodoClick && onTodoClick(todo, index) }} className={classnames({ 'todo-item': true, completed: todo.status === 'completed' })} key={todo.id}>{todo.title}</li>
        ))
      }
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

export default TodoList;