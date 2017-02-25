import { setPusherClient } from 'react-pusher'
import pusherClient from 'pusher-js'
 
const pusherClient = new Pusher('4acf374f2f776dccbe04', {
  encrypted: true
})
 
setPusherClient(pusherClient)

export const UserChannel = `lol-optimizer-channel:${window.CurrentUser.id}`