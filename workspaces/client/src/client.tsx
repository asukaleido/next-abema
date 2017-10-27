import * as React from 'react';
import { hydrate } from 'react-dom';
import router from '../../core/src/router';
import RouterContainer from '../../core/src/router/container/RouterContainer';
import * as action from '../../core/src/router/action/RouterAction';
import { history } from '../../core/src/router/history';

let initialized = false;

function initialize() {
  hydrate(
    <RouterContainer />,
    document.getElementById('app'),
  );
  initialized = true;
}

async function render() {
  const Container = await router.resolve(location.pathname);
  action.change({ Container: Container.default });
  if (!initialized) initialize();
}

render();

history.listen(() => {
  render();
});
