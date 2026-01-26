import React from 'react'

class NoSSR extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      canRender: false
    }
  }

  componentDidMount() {
    this.setState({ canRender: true })
  }

  render() {
    const { children, fallback = null } = this.props
    return this.state.canRender ? children : fallback
  }
}

export default NoSSR
