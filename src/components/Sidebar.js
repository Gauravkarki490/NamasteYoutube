import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const  isMenuOpen = useSelector(store=>store.app.isMenuOpen)

//   Early return
  if(!isMenuOpen) return null;

  return (
    <div  className='shadow-2xl p-2 w-48 h-1/2  sticky top-24 z-50 bg-white'>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
        </ul>
        <br/>
        <ul>
            <li>Library</li>
            <li>History</li>
            <li>Your videos</li>
        </ul>
      
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Movie</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Musics</li>
        </ul>

        <h1 className='font-bold pt-5'>Explore</h1>
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movie</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
        </ul>
    </div>
  )
}

export default Sidebar