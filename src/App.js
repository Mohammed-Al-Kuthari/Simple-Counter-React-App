import React, { Component, Fragment } from 'react'
import Navbar from './components/navbar';
import Movies from './components/movies'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <main className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <Movies/>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;
