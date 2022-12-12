import { useState, useEffect } from 'react'
import PlayerApp from '../components/MediaPlayer'
import React from 'react'
import Client from '../services/api'
import { BASE_URL } from '../services/api'

const Music = () => {
  const [myPlaylist, setMyPlaylist] = useState([])

  useEffect(() => {})
  return (
    <div>
      <PlayerApp />
    </div>
  )
}

export default Music
