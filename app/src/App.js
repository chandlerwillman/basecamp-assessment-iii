import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            <li><a href="https://www.facebook.com/DevMountain/"><img src="https://cdn2.hubspot.net/hub/3313679/hubfs/Viner%20Weekly/group-3.png?width=37&height=37&name=group-3.png" alt="fb icon" height="42" width="42"></img></a></li>
            <li><a href="https://www.facebook.com/DevMountain">Like DevMountain on Facebook</a></li>
            <li><a href="https://www.instagram.com/devmtn"><img src="https://cdn2.hubspot.net/hub/3313679/hubfs/Viner%20Weekly/group-2.png?width=37&height=37&name=group-2.png" alt="instagram icon" height="42" width="42"></img></a></li>
            <li><a href="https://www.instagram.com/devmtn">Follow DevMountain on Twitter</a></li>
            <li><a href="https://www.devmountain.com"><img src="https://cdn2.hubspot.net/hub/3313679/hubfs/Viner%20Weekly/group.png?width=37&height=37&name=group.png" alt="website icon" height="42" width="42"></img></a></li>
            <li><a href="https://www.devmountain.com">Visit the DevMountain Website</a></li>
          </ul>
          <div class="button">
            <p><a href="https://www.devmountain.com">Start Coding!</a></p>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
