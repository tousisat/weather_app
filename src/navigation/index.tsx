import { Suspense, Fragment } from 'react';
import type { FC } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoadingView from 'src/components/LoadingScreen';
import root from './path';

import type { IRoute } from 'src/navigation/@types/route';

/**
 * List of guards to be executed before hitting the render
 */
const renderGuards = (guards: FC[] | [] = [], render: FC) => {
  const guardsClone = [...guards];
  const Guard = guardsClone.shift(); // get the first el
  if (Guard) {
    return <Guard>{renderGuards(guardsClone, render)}</Guard>;
  }
  return render({});
};

/**
 * List of provider (context API) to be executed before hitting the render
 */
const renderProviders = (providers: FC[] | [] = [], render: FC) => {
  const providersClone = [...providers];
  const Provider = providersClone.shift(); // get the first el
  if (Provider) {
    return <Provider>{renderGuards(providersClone, render)}</Provider>;
  }
  return render({});
};

const renderRoutes = (routesArray: IRoute[]) => (
  <Suspense fallback={<LoadingView />}>
    <Switch>
      {routesArray.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;
        const { path, guards, providers, redirect } = route;
        let { routes = [] } = route;

        if (redirect) {
          routes.push({
            component: () => <Redirect to={redirect} />,
            path: () => '*',
            guards: []
          });
        }

        return (
          <Route
            key={i}
            path={path()}
            exact={!!Component}
            render={(props) =>
              renderGuards(guards, () =>
                renderProviders(providers, () => <Layout>{Component ? <Component {...props} /> : renderRoutes(routes)}</Layout>)
              )
            }
          />
        );
      })}
    </Switch>
  </Suspense>
);

export default renderRoutes([root]);
