import React, { Component, Fragment } from "react";
import Navbar from "./components/Navbar";
import Counters from "./components/Counters";

class Counter {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  incrementCounter() {
    this.value++;
  }

  decrementCounter() {
    this.value--;
  }
}
class App extends Component {
  state = {
    lastId: 0,
    counters: [],
  };

  createCounter = () => {
    let { lastId } = this.state;
    const counter = new Counter(++lastId, 0);
    const counters = [...this.state.counters, counter];
    this.setState({ counters, lastId });
  };

  deleteCounter = (counter) => {
    const counters = this.state.counters.filter((c) => c !== counter);
    this.setState({ counters });
  };
  incrementCounter = (counter) => {
    const counters = [...this.state.counters];
    const i = counters.indexOf(counter);
    counters[i].value++;
    this.setState({ counters });
  };

  decrementCounter = (counter) => {
    const counters = [...this.state.counters];
    const i = counters.indexOf(counter);
    counters[i].value--;
    this.setState({ counters });
  };

  render() {
    return (
      <Fragment>
        <Navbar
          total={this.state.counters.reduce((val, c) => val + c.value, 0)}
          onCreateCounter={this.createCounter}
        />
        <main className="container mt-3">
          <Counters
            onIncrement={this.incrementCounter}
            onDecrement={this.decrementCounter}
            onDelete={this.deleteCounter}
            counters={this.state.counters}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
