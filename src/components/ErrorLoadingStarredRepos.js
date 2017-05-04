import React from 'react';
import styled from 'styled-components';


class ErrorLoadingStarredRepos extends React.Component {
  render() {
    let P = styled.p`
      color: red;
    `
    return (
      <div>
        <P>Hmm.. Please make sure the username is valid. If it is, something must be wrong with Github because I don't make mistakes ;)</P>
      </div>
    )
  }
}

export default ErrorLoadingStarredRepos
