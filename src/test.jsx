import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class Test extends Component {
  // method overriding

  state = {
    count: 0,
  };

  constructor(props) {
    super(props);

    this.state = {
      count: Number(props.count),
    };
  }

  static getDerivedStateFromProps(props, state) {
    //console.log(props);
    //console.log(state);
    return {
      count: state.count,
    };
  }

  componentDidMount() {
    throw new Error('something went wrong');
    console.log('componentDidMount');
    const btns = document.getElementsByTagName('button');
    console.log(btns);
  }

  // no need to use if we extends PureComponent
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);

    return shallowCompare(this, nextProps, nextState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('getSnapShotBeforeUpdate');
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
    return { snapshot: 0 };
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
    console.log('snapshot: ', snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    // clear any async codes here
  }

  static getDerivedStateFromError(error) {
    // error is captured from a life cycle method
    console.log('getDerivedStateFromError');
    console.log('error: ', error);
  }

  componentDidCatch(error, errorInfo) {
    // you upload error to server
    console.log('componentDidCatch');
    console.log('error: ', error);
    console.log('errorInfo: ', errorInfo);
  }

  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  decrement = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };

  render() {
    const { count } = this.state;
    console.log('render: ', this.state);

    return (
      <div>
        <button type="button" onClick={this.increment}>
          +
        </button>
        <p>{count}</p>
        <button type="button" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}

//export default Test;
