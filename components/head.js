import PropTypes from 'prop-types';
import React from 'react';
import NextHead from 'next/head';

class Head extends React.PureComponent {
  render() {
    return (
      <div>
        <NextHead>
          <title>{this.props.titlePrefix + this.props.title}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#000" />
          {this.props.children}
        </NextHead>
      </div>
    );
  }
}

Head.defaultProps = {
  title: '',
  titlePrefix: '',
};

Head.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string,
  titlePrefix: PropTypes.string,
};

export default Head;
