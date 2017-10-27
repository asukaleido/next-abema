import * as React from 'react';

interface Props {
  to: string;
  children: any;
}

export default class Link extends React.PureComponent<Props, {}> {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const { to, children } = this.props;
    return (
      <a href={to} onClick={this.onClick}>{children}</a>
    );
  }

  async onClick(e) {
    e.preventDefault();
    const { to } = this.props;
    const { history } = await import('../../../../router/history');
    history.push(to);
  }
}
