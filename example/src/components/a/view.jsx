import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { doChangeData, doAsync } from './action';

class View extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <div >
          我是a页面
          <div>name: {this.props.name}</div>
          <div>路由参数：{id}</div>
        </div>
        <div >
          <button
            onClick={() => {
              this.props.dispatch(doChangeData({ name: 'xx' }));
            }}>
            dispatch
          </button>
        </div>
        <div >
          <button
            onClick={() => {
              this.props.dispatch(doAsync());
            }}>
            async
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state['a'];
export default connect(mapStateToProps)(View)

