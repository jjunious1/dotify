import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import React from 'react'
import Client from '../services/api'
import { BASE_URL } from '../services/api'

const Playlist = ({ authenticated, user }) => {
  const [myPlayList, setMyPlaylist] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const getMySongs = async () => {
      const response = await Client.get(`${BASE_URL}userpage/${id}`)
      setMyPlaylist(response.data[0].songs)
    }
  }, [])

  return
  ;<div></div>
}

export default Playlist
