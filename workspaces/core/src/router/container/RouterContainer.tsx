import * as React from 'react';
import * as store from '../store/RouterStore';
import { HeaderContainer } from '../../../../apps/header';

interface State {
  Container: React.ComponentClass<any>;
}

export class RouterContainer extends React.PureComponent<{}, State> {

  state: State = {
    Container: null,
  };

  componentWillMount() {
    store.route$.subscribe(this.setState.bind(this));
  }

  render() {
    const { Container } = this.state;
    if (Container) {
      return (
        <div>
          <HeaderContainer />
          <Container />
        </div>
      );
    }
    if (Container) return <Container />;
    return <div>loading...</div>;
  }
}
