import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as dispatcher from '../dispatcher/RouterDispatcher';

export const route$ = new BehaviorSubject({ Container: null });

dispatcher.change$.subscribe((params) => {
  route$.next(params);
});
