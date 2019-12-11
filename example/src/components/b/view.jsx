import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

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
        b
      </div>
    )
  }
}
const mapStateToProps = state => state['b'];
export default connect(mapStateToProps)(View)
