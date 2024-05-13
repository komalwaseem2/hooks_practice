import React, { useState } from 'react';

export default function Counter2(props) {

    const [count,setCount] = useState(0);

    const incrementCount = () => {
        setCount((prev)=>prev+1);
    };

    const decrementCount = () => {
        setCount((prev)=>prev-1);
    };

    return (
      <div>
        <h2>Counter</h2>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <p>Count: {count}</p>
      </div>
    );
}


/*

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default Counter;

 */
