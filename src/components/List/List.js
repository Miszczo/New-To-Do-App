import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss'
import Hero from '../Hero/Hero.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  }
  render() {
    return (
      <section className={styles.Component}>
        <Hero titleText={this.props.title} />
        <div className={styles.description}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default List;