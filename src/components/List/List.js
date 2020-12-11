import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss'
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  }
  render() {
    return (
      <section className={styles.Component}>
        <Hero 
          titleText={this.props.title} 
          imageLink={this.props.image}
        />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column titleOne='jeden'></Column>
          <Column titleTwo='dwa'></Column>
          <Column titleThree='trzy'></Column>
        </div>
      </section>
    );
  }
}

export default List;