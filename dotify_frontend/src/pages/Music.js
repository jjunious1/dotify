import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PlayerApp from '../components/MediaPlayer'
import React from 'react'
import Client from '../services/api'
import Browse from './Browse'
import { BASE_URL } from '../services/api'

const Music = ({ authenticated, user, handleLogout }) => {
  const [myPlaylist, setMyPlaylist] = useState([])
  const [songs, setSongs] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const getMySongs = async () => {
      const response = await Client.get(`${BASE_URL}userpage/${id}`)
      console.log(response.data.songs.data)
    }
    getMySongs()
    const getAllSongs = async () => {
      const response = await Client.get(`${BASE_URL}userpage`)
      console.log(response)
    }
  }, [])
  return (
    <div>
      <Browse />
      <PlayerApp />
    </div>
  )
}

export default Music
