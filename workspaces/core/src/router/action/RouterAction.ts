import * as dispatcher from '../dispatcher/RouterDispatcher';

export const change = (params) => {
  dispatcher.change$.next(params);
};
