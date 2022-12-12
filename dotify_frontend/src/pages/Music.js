import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PlayerApp from '../components/MediaPlayer'
import React from 'react'
import Client from '../services/api'
import Browse from './Browse'
import { BASE_URL } from '../services/api'

const Music = ({ authenticated, user, handleLogout }) => {
  const [myPlayList, setMyPlaylist] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const getMySongs = async () => {
      const response = await Client.get(`${BASE_URL}userpage/${id}`)
      setMyPlaylist(response.data[0].songs)
    }
    getMySongs()
  }, [])
  return (
    <div>
      {/* <Browse /> */}
      <PlayerApp songs={myPlayList.map((song) => song.music_file)} />
    </div>
  )
}

export default Music
