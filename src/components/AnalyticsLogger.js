import React from 'react'
import { logPageView, initialize } from '../utils/analytics'


class AnalyticsLogger extends React.Component {
  componentDidMount() {
    if (!window.__MOUNT_GA__) {
      initialize()
      window.__MOUNT_GA__ = true
    }
    logPageView(this.props.asPath)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.asPath !== nextProps.asPath) {
      logPageView(nextProps.asPath)
    }
  }

  render() {
    return null
  }
}

export default AnalyticsLogger
