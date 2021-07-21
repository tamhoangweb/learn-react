import React, { useState, useMemo, useEffect } from 'react';
import TodoList from '../../components/TodoList';
import queryString from 'query-string'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'

const ListPage = props => {
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

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search)
    return params.status || 'all'
  })

  const filteredTodoList = useMemo(() => todoList.filter((todo) => filteredStatus === todo.status || filteredStatus === 'all'), [todoList, filteredStatus])
  console.log(filteredTodoList)
  function handleShowAll() {
    const queryParams = { status: 'all' }
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams)
    })

  }
  function handleShowCompleted() {
    const queryParams = { status: 'completed' }
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams)
    })
  }
  function handleShowNew() {
    const queryParams = { status: 'new' }
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams)
    })
  }
  function handleTodoClick(todo, index) {
    console.log('clicked', todo)
    let newTodoList = [...todoList]
    newTodoList[index].status === 'new' ? newTodoList[index].status = 'completed' : newTodoList[index].status = 'new'
    setTodoList(newTodoList)
  }
  useEffect(() => {
    const params = queryString.parse(location.search)
    setFilteredStatus(params.status || 'all')
  }, [location.search])
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

ListPage.propTypes = {

};

export default ListPage;