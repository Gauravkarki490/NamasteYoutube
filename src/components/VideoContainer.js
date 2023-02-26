import React, { useState,useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/contants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  }
 if(videos.length === 0){
  return null;
 }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md   '>
      {videos.map(video=>(<Link to={"/watch?v="+video.id} key={video.id} ><VideoCard  info={video}/></Link>))}
     
    </div>
  )
}

export default VideoContainer