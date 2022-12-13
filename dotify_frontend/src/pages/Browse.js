import { useState, useEffect } from 'react'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import { useParams } from 'react-router-dom'
import PlayerApp from '../components/MediaPlayer'

const Browse = ({ authenticated, user }) => {
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

  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <div>
        <ul className="songs">
          {songs.map((song) => (
            <li key={song.id}>
              <h3>{song.artists_name}</h3>
              <h4>{song.genre}</h4>
              <img src={song.img} alt="image" />
              <form onSubmit={addLike}>
                <button type="submit" value={song.id} onClick={addLikedSong}>
                  Like
                </button>
              </form>
            </li>
          ))}
        </ul>
        <PlayerApp />
      </div>
    )
  }
  const publicOptions = (
    <div>
      <h3 className="browse_text">Please login or register to play music!</h3>
      <div>
        <ul className="songs2">
          {songs.map((song) => (
            <li key={song.id}>
              <h3>{song.artists_name}</h3>
              <h4>{song.genre}</h4>
              <img className="img_wrap" src={song.img} alt="image" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div>{authenticated && user ? authenticatedOptions : publicOptions}</div>
  )
}

export default Browse
