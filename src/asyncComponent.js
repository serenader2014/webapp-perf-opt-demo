import React, { Component } from 'react';

export default function asyncComponent(loadComponent) {
  class AsyncComponent extends Component {
    state = {
      component: null
    }

    async componentDidMount() {
      const res = await loadComponent();
      this.setState({ component: res.default });
    }

    render() {
      const Comp = this.state.component;
      return Comp ? <Comp /> : null;
    }
  }

  return AsyncComponent;
}
