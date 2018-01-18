import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }else if(this.props.children) {
      return this.props.children;
    }else return <h1>Something went wrong.</h1>;
  }
}


ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ErrorBoundary;
