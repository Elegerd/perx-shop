import React from 'react';
import { Switch, Router as DOMRouter, Redirect } from 'react-router-dom';

import History from 'Services/history';
import { Route } from 'Routes';
import * as Layouts from 'Layouts';
import * as Pages from 'Pages';

import { BaseRoutes } from 'Types/routes';

const AppRoutes: React.VFC = () => {
  return (
    <DOMRouter history={History}>
      <Switch>
        <Route layout={Layouts.MainLayout} path={BaseRoutes.ROOT}>
          <Route exact component={Pages.Dealers} path={BaseRoutes.DEALERS} />
          <Route exact component={Pages.Basket} path={BaseRoutes.BASKET} />
          <Redirect to={BaseRoutes.DEALERS} />
        </Route>
      </Switch>
    </DOMRouter>
  );
};

export default AppRoutes;
