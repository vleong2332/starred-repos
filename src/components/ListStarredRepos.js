import React from 'react'
import styled from 'styled-components'


class ListStarredRepos extends React.Component {

  _renderRepo(repo, index) {
    let Li = styled.li`
      list-style-type: none;
      padding: 1rem;
      text-align: left;
      flex: 1 0 25%;
      box-sizing: border-box;
      word-break: break-all;
      display: flex;
      align-items: center;
      &:hover {
        background-color: rgba(100, 100, 100, 0.2);
      }
    `
    let A = styled.a`
      color: white;
      text-decoration: none;
    `
    return (
      <Li className="repo" key={ index }>
        <A href={ repo.url } target="_blank">{ repo.name }</A>
      </Li>
    )
  }

  render() {
    let Ul = styled.ul`
      padding-left: 0;
      margin: 0;
      max-width: 100%;
      display: flex;
      flex-wrap: wrap;
      background-color: #222;
    `
    return (
      <div>
        <Ul>
          {
            this.props.repos.map(this._renderRepo)
          }
        </Ul>
      </div>
    )
  }

}

export default ListStarredRepos
