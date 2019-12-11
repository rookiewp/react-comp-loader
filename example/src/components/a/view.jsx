import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { doGetData } from './action';

class View extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    console.log(this.props)
  }

  render() {
    return (
      <div onClick={() => { this.props.dispatch(doGetData())}}>
        a/{this.props.pageNum}
      </div>
    )
  }
}

const mapStateToProps = state => state['a'];
export default connect(mapStateToProps)(View)

