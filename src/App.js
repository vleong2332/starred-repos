import React, { Component } from 'react';

import LoadStarredRepos from './components/LoadStarredRepos';
import LoadingStarredRepos from './components/LoadingStarredRepos';
import ErrorLoadingStarredRepos from './components/ErrorLoadingStarredRepos';
import ListStarredRepos from './components/ListStarredRepos';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <LoadStarredRepos username="dhh">
          {
            ({ repos, error }) =>
              repos === null ?
                <LoadingStarredRepos /> :
                error ?
                  <ErrorLoadingStarredRepos /> :
                  <ListStarredRepos repos={repos} />
          }
        </LoadStarredRepos>
      </div>
    );
  }
}

export default App;
