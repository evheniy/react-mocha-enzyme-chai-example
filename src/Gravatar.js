import React from 'react';
import md5 from 'md5';

import Avatar from './Avatar';
import Email from './Email';

export default class Gravatar extends React.Component {
  state = {
    email: 'someone@example.com',
    src: 'http://placehold.it/200x200',
  };

  updateGravatar() {
    this.setState({
      src: `http://gravatar.com/avatar/${md5(this.state.email)}?s=200`,
    });
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div className="react-gravatar">
        <h4>Avatar for:</h4>
        <Avatar {...this.state} />
        <Email
          fetchGravatar={this.updateGravatar.bind(this)}
          handleEmailChange={this.updateEmail.bind(this)}
        />
      </div>
    );
  }
}
