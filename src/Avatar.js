import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Avatar extends Component {
  static propTypes = {
    email: PropTypes.string,
    src: PropTypes.string,
  };

  static defaultProps = {
    email: '',
    src: '',
  };

  render() {
    return (
      <div className="avatar">
        <p>
          <em>{this.props.email}</em>
        </p>
        <img src={this.props.src} className="img-rounded" alt="" />
      </div>
    );
  }
}
