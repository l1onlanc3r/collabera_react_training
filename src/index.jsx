// import { firstName, lastName , add} from './app';
// import '../style.scss';

import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import Test from './test';

const container = document.getElementById('root');
const root = createRoot(container);

function App({ firstName, lastName, color }) {
  return (
    <h1
      style={{
        color,
      }}
    >
      Hello, {`${firstName} ${lastName}`}!
    </h1>
  );
}

class App2 extends Component {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
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

  render() {
    const { count } = this.state;

    return (
      <div>
        <Test count={count} />
        <p>{count}</p>
        <button type="button" onClick={this.increment}>
          Count +
        </button>
      </div>
    );
  }
}

root.render(
  <>
    <App firstName="Sherwin" lastName="Ricaforte" color="black" />
    <App firstName="Sly" lastName="Fox" color="yellow" />
    <App firstName="Lion" lastName="Lancer" color="red" />

    <App2 />
  </>,
);

/*
root.render(
  <div>
    <h1>Konnichiwa, {`${firstName} ${lastName}`}!</h1>
    <button id="btn" onclick="{ add(4, 5) }">Add</button>
  </div>  
);
*/
/*
function hello(a, b) {
  return `Hello, ${a} ${b}!`;
}
*/
// alert(hello(firstName, lastName));
// add(1, 4);

// document.getElementById("btn").click(() => add(1, 4));
