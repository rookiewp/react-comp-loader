import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { doInit } from './action';

class View extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <div >
          a
        </div>
        <div >
          <button onClick={() => { this.props.dispatch(doInit())}}>dispatch saga</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state['a'];
export default connect(mapStateToProps)(View)

