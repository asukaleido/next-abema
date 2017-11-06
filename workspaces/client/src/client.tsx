import * as React from 'react';
import { hydrate } from 'react-dom';
import { router } from './router';
import {
  RouterAction as action,
  RouterContainer,
} from '../../core/router';
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
  action.change({ Container });
  if (!initialized) initialize();
}

export function bootstrap() {
  render();

  history.listen(() => {
    render();
  });
}

