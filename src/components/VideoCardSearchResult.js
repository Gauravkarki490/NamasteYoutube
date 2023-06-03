import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu, closeSearchBar } from '../utils/appSlice';
import { useSelector } from 'react-redux';
function VideoCardSearchResult({info}) {

    const {snippet} = info;
    const {channelTitle,title,thumbnails} = snippet;
    const dispatch = useDispatch();
    const showSuggestions = useSelector(state=>state.app.isSearchOpen)
    console.log(showSuggestions)
    useEffect(()=>{
        dispatch(closeMenu())

        dispatch(closeSearchBar())
    },[])
  return (
    <div className='p-2 m-2   shadow-lg  flex'>
    <img
    className='rounded-lg' 
    alt={title} src={thumbnails.medium.url} />
    <ul>
        <li className='font-bold p-2 text-ellipsis overflow-hidden whitespace-nowrap  break-words'>{title}</li>
        <li className='px-2'>{channelTitle}</li>
       
    </ul>

</div>
  )
}

export default VideoCardSearchResult