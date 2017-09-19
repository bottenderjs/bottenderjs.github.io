import React from 'react';
import Link from 'next/link';
import qs from 'query-string';

import data from '../../../lib/data/docs';

export class NavLink extends React.Component {
  getCurrentHref() {
    const { url } = this.props;
    const query = qs.stringify(url.query);
    let href = url.pathname;

    if (query !== '') {
      href = `${href}?${query}`;
    }

    return href;
  }

  isSelected() {
    const { href, aliases = [] } = this.props.info;
    const currentHref = this.getCurrentHref();

    if (href === currentHref) return true;
    if (aliases.indexOf(currentHref) >= 0) return true;

    return false;
  }

  render() {
    const { info } = this.props;

    return (
      <div>
        <Link href={info.href} as={info.as || info.href} prefetch>
          <a className={this.isSelected() ? 'selected' : ''}>{info.name}</a>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            font-size: 14px;
            color: #000;
          }
          a.selected {
            font-weight: 600;
            color: #000;
          }
        `}</style>
      </div>
    );
  }
}

export default class DocsNavbarDesktop extends React.Component {
  renderPost(info, level) {
    if (info.posts) {
      return this.renderCategory(info, level + 1);
    }

    return (
      <div className="link" key={info.href}>
        <NavLink info={info} url={this.props.url} />
        <style jsx>{`
          .link {
            margin: 10px 0;
          }
          @media screen and (max-width: 950px) {
            .link {
              padding: 20px 0;
              margin: 0;
              border-bottom: 1px solid #eee;
            }
          }
        `}</style>
      </div>
    );
  }

  renderCategory(info, level = 1) {
    const levelClass = `level-${level}`;
    const postStyle = {
      marginLeft: 10 * (level - 1),
    };

    return (
      <div className={`category ${levelClass}`} key={info.name}>
        <div className="label">
          {info.href ? <NavLink info={info} url={this.props.url} /> : info.name}
        </div>
        <div className="posts" style={postStyle}>
          {info.posts.map(postInfo => this.renderPost(postInfo, level))}
        </div>
        <style jsx>{`
          .label {
            margin: 0 0 15px 0;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1.3px;
            font-weight: 400;
            color: #888;
            cursor: default;
          }
          .level-2 .label {
            font-size: 14px;
            font-weight: 400;
            margin: 10px 0;
            text-transform: none;
            letter-spacing: 0;
            cursor: default;
          }
          .category.level-1 {
            margin: 0 0 50px 0;
          }
          @media screen and (max-width: 950px) {
            .label {
              margin: -10px 0;
            }
            .level-2 .label {
              padding: 20px 0;
              margin: 0;
              border-bottom: 1px solid #eee;
            }
          }
        `}</style>
      </div>
    );
  }

  render() {
    return (
      <div>{data.map(categoryInfo => this.renderCategory(categoryInfo))}</div>
    );
  }
}
