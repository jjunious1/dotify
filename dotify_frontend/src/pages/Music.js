import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PlayerApp from '../components/MediaPlayer'
import React from 'react'
import Client from '../services/api'
import { BASE_URL } from '../services/api'

const Music = () => {
  const [myPlaylist, setMyPlaylist] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const getMySongs = async () => {
      const response = await Client.get(`${BASE_URL}userpage/${id}`)
      console.log(response)
    }
    getMySongs()
  }, [])
  return (
    <div>
      <PlayerApp />
    </div>
  )
}

export default Music
