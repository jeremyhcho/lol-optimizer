import { setPusherClient } from 'react-pusher'
import Pusher from 'pusher-js'
 
const pusherClient = new Pusher('4acf374f2f776dccbe04', {
  encrypted: true
})
 
setPusherClient(pusherClient)

export const UserChannel = window.currentUser ? `lol-optimizer-channel:${window.currentUser.id}` : ''