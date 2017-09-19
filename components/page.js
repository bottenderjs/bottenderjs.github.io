import PropTypes from 'prop-types';
import React from 'react';
import Head from 'next/head';

class Page extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            html {
              height: 100%;
              box-sizing: border-box;
            }
            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }
            a {
              -webkit-tap-highlight-color: rgba(0,0,0,0);
            }
            body {
              position: relative;
              min-height: 100%;
              margin: 0;
              padding-bottom: 6rem;
              text-rendering: optimizeLegibility;
            }
            html, body {
              background-color: #fff;
              color: #000;
            }
          `,
            }}
          />
        </Head>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Page;
