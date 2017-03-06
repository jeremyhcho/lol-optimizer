import React from 'react'
import { setPusherClient } from 'react-pusher'
import ReactPusher from 'react-pusher'
import Pusher from 'pusher-js'
 
const pusherClient = new Pusher('4acf374f2f776dccbe04', {
  encrypted: true
})
 
setPusherClient(pusherClient)

const UserChannel = () => window.currentUser ? `lol-optimizer-channel-${window.currentUser.id}` : ''

class PusherNotification extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <ReactPusher
          channel={ UserChannel() }
          event={ this.props.event }
          onUpdate={ this.props.callback }
        />
      </div>
    )
  }
}

export default PusherNotification