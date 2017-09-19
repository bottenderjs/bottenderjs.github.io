import React from 'react';

import Head from '../components/head';
import Page from '../components/page';

export default function withDoc(options) {
  return function withContent(content) {
    const DocPage = () => (
      <Page>
        <Head
          titlePrefix=""
          title={`${options.title} - Bottender Documentation`}
        />
        <div className="header">this is header</div>
        <div>
          <div className="doc-layout">
            <div className="content">
              <h1>{options.title}</h1>
              <div className="doc-markdown">{content}</div>
            </div>
            <div />
          </div>
        </div>
        <style jsx>{`
          .doc-layout {
            display: flex;
            margin: 100px 30px 50px 320px;
            padding: 0 20px;
            justify-content: left;
            -webkit-font-smoothing: antialiased;
          }

          .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
          }

          .sidebar {
            position: fixed;
            width: 280px;
            margin-top: 0;
            bottom: 0;
            left: 0;
            top: 100px;
            padding-left: 30px;
            overflow: auto;
            -webkit-font-smoothing: antialiased;
          }

          .topbar {
            display: none;
          }

          .content {
            flex: 1;
            max-width: 600px;
          }

          .content h1 {
            color: #000;
            font-size: 26px;
            line-height: 1.1;
            font-weight: 400;
            margin: 0 0 30px 0;
            padding: 0;
          }

          @media screen and (max-width: 950px) {
            .header {
              position: relative;
            }

            .doc-layout {
              display: block;
              margin: 0;
            }

            .content {
              width: 100%;
              margin-left: 0;
            }

            .sidebar {
              display: none;
            }

            .topbar {
              display: block;
            }
          }
        `}</style>
      </Page>
    );

    return DocPage;
  };
}
