import React from 'react';
import classNames from 'classnames';
import { withRouter, Link } from 'react-router';

import styles from './index.sass';

@withRouter
class Navigation extends React.PureComponent {
  render() {
    const { params } = this.props;

    // if (params.accountId === undefined)
    //   return null;

    return (
      <ul className='pure-menu-list'>
          <li className='pure-menu-item'>
              <Link to={`/resources`}
                    className={classNames('pure-menu-link', styles.links)}
                    activeClassName={styles.active}>
                  Resources
              </Link>
          </li>
          <li className='pure-menu-item'>
              <Link to={`/disasters`}
                    className={classNames('pure-menu-link', styles.links)}
                    activeClassName={styles.active}>
                  Disasters
              </Link>
          </li>
          <li className='pure-menu-item'>
              <Link to={`/request`}
                    className={classNames('pure-menu-link', styles.links)}
                    activeClassName={styles.active}>
                  Request
              </Link>
          </li>
      </ul>
    );
  }
}

export default Navigation;
