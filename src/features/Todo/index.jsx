import React, { useState } from 'react';
import TodoList from './components/TodoList';

const TodoFeature = props => {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'new'
    },
    {
      id: 3,
      title: 'Code',
      status: 'new'
    },
  ]
  const [todoList, setTodoList] = useState(initTodoList)
  const [filteredStatus, setFilteredStatus] = useState('all')

  const filteredTodoList = todoList.filter((todo) => filteredStatus === todo.status || filteredStatus === 'all')
  console.log(filteredTodoList)
  function handleShowAll() {
    setFilteredStatus('all')
  }
  function handleShowCompleted() {
    setFilteredStatus('completed')
  }
  function handleShowNew() {
    setFilteredStatus('new')
  }
  function handleTodoClick(todo, index) {
    console.log('clicked', todo)
    let newTodoList = [...todoList]
    newTodoList[index].status === 'new' ? newTodoList[index].status = 'completed' : newTodoList[index].status = 'new'
    setTodoList(newTodoList)
  }
  return (
    <>
      <TodoList todoList={filteredTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
    </>
  );
};

TodoFeature.propTypes = {

};

export default TodoFeature;