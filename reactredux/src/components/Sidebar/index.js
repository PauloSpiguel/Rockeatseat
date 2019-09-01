
import React, { Component } from 'react';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  render() {
    const { date } = this.state;
    return <div>{String(date)}</div>;
  }
}
