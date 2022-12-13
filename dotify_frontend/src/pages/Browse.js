import { useState, useEffect } from 'react'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import { useParams } from 'react-router-dom'

const Browse = ({ authenticated, user, handleLogout }) => {
  const [songs, setSongs] = useState([])
  const { id } = useParams()
  const [likeSong, setLikedSong] = useState({
    musicId: 0,
    userId: parseInt(id)
  })

  useEffect(() => {
    const getSongs = async () => {
      const response = await Client.get(`${BASE_URL}music`)
      console.log(response)
      setSongs(response.data)
    }
    getSongs()
  }, [])

  const addLikedSong = async (e) => {
    setLikedSong({ ...likeSong, ['musicId']: parseInt(e.target.value) })
  }

  const addLike = async (e) => {
    const add = await Client.post(`${BASE_URL}userpage`, likeSong)
    console.log(add)
  }
  return (
    <div>
      <ul className="songs" onClick="">
        {songs.map((song) => (
          <li key={song.id}>
            <h3>{song.artists_name}</h3>
            <h4>{song.genre}</h4>
            <img src={song.img} alt="image" />
            <div class="large-font text-center top-20"></div>
            <form onSubmit={addLike}>
              <button type="submit" value={song.id} onClick={addLikedSong}>
                Like
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Browse
