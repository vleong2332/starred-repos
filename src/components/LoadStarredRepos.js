import React from 'react';
import Github from 'github-api';


const gh = new Github()


class LoadStarredRepos extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      repos: null,
      error: null
    }
  }

  _updateRepos(rawRepos) {
    this.setState((prevState, props) => {
      return {
        ...prevState,
        repos: rawRepos.map(({ name, url }) => {
          return { name, url }
        })
      }
    })
  }

  _updateError(error) {
    this.setState((prevState, props) => {
      return {
        ...prevState,
        error: error
      }
    })
  }

  _getUserStarredRepos() {
    let user = gh.getUser(this.props.username)
    user.listStarredRepos().then(resp => {
      this._updateRepos(resp.data)
    })
    .catch(error => {
      this._updateError(error)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.username !== prevProps.username && this._getUserStarredRepos()
  }

  componentDidMount() {
    this._getUserStarredRepos()
  }

  render() {
    return (
      <div className="load-starred-repos">
        <h1>Starred repos for user: {this.props.username}</h1>
        {
          this.props.children(this.state)
        }
      </div>
    )
  }

}

export default LoadStarredRepos
