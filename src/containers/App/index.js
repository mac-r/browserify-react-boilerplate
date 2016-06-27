import React from 'react'
import { connect } from 'react-redux'

import milligram from 'milligram/dist/milligram.css';
import styles from './_App.css';

class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
};

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps)(App);
