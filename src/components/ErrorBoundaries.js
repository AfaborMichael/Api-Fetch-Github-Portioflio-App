import { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorBoundaries extends Component {
  constructor() {
    super()
    this.state = { hasError: false }
  }
  componentDidCatch(error) {
    console.log(error)
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className='Error'>
          <h2>An error has Occurred</h2>
          <Link to='/'>Back to the Home Page...</Link>
        </main>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundaries
