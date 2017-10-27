import * as React from 'react';
import * as store from '../store/RouterStore';
import HeaderContainer from '../../../../apps/src/header/container/HeaderContainer';

interface State {
  Container: React.ComponentClass<any>;
}

export default class Router extends React.PureComponent<{}, State> {

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
