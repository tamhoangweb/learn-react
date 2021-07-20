import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

const TodoFeature = props => {
  const todoList = [
    {
      id: 1,
      title: 'Eat',
    },
    {
      id: 2,
      title: 'Sleep',
    },
    {
      id: 3,
      title: 'Code',
    },
  ]
  return (
    <>
      <TodoList todoList={todoList} />
    </>
  );
};

TodoFeature.propTypes = {

};

export default TodoFeature;