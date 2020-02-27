import React, { Component } from 'react'
import { RoomContext } from '../context'

import Loading from './Loading';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext

  render() {
    const { featuredRooms: rooms } = this.context
    console.log(rooms);
    

    return (
      <div>
        Hello from Featured Rooms
        <p></p>
        <Loading />
      </div>
    )
  }
}
