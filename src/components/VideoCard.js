import React from 'react'

const VideoCard = ({info}) => {

    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails} = snippet;
    const {viewCount} = statistics;
  return (
    <div className='p-2 m-2 w-72  shadow-lg  '>
        <img
        className='rounded-lg' 
        alt={title} src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold p-2 text-ellipsis overflow-hidden whitespace-nowrap  break-words'>{title}</li>
            <li className='px-2'>{channelTitle}</li>
            <li className='px-2'>{viewCount} views</li>
        </ul>

    </div>
  )
}

export default VideoCard;