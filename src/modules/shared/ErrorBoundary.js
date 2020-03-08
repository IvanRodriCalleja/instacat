import React, { Component } from "react";

import { CatsError } from "./CatsError";

export class ErrorBoundary extends Component {
  state = {
    error: null
  };

  componentDidCatch = (error, errorInfo) => {
    this.setState({ error });
    console.log({ error, errorInfo });
  };

  render = () => {
    if (this.state.error) return <CatsError error={this.state.error} />;

    return this.props.children;
  };
}
