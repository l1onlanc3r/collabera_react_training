import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('error: ', error);
    console.log('errorInfo: ', errorInfo);
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      // You can render any custom fallback UI
      return <h1>{error.message}</h1>;
    }

    return children;
  }
}
