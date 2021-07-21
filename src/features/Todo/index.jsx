import React from 'react';
import { Switch, useRouteMatch } from 'react-router';
import { Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import NotFound from '../../components/NotFound';

const TodoFeature = props => {
  const match = useRouteMatch()
  return (
    <>
      <h1>TODO Shared UI</h1>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

TodoFeature.propTypes = {

};

export default TodoFeature;