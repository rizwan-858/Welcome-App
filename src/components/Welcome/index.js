// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {status: false}

  subscibeBtn = () => {
    this.setState(() => ({status: true}))
  }

  subscribedBtn = () => {
    this.setState(() => ({status: false}))
  }

  render() {
    const {status} = this.state
    return (
      <div className="bg">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy Learning</p>
        {status ? (
          <button type="button" className="btn" onClick={this.subscribedBtn}>
            Subscribed
          </button>
        ) : (
          <button type="button" onClick={this.subscibeBtn} className="btn">
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
