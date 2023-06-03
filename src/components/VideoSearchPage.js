
import { useSearchParams,Link } from 'react-router-dom'
import { YOUTUBE_KEYWORD_SEARCH } from '../utils/contants';
import { useState,useEffect } from 'react';

import VideoCardSearchResult from './VideoCardSearchResult';

function VideoSearchPage() {
    const [params]= useSearchParams();
    const searchQuery = params.get('searchQuery');

    const [videos,setVideos] = useState([]);

    const getVideos = async ()=>{
        const data = await fetch(YOUTUBE_KEYWORD_SEARCH + searchQuery);
        const json = await data.json();
        setVideos(json.items);
      }

    useEffect(()=>{
        getVideos()
    },[searchQuery])

    if(videos&&videos.length === 0){
        return null;
       }
       console.log(videos)
  return (
    
    <main className=' w-full flex justify-center '>

    <div className=''>
       {videos.map(video=>(<Link to={"/watch?v="+video.id.videoId} key={video.id} ><VideoCardSearchResult  info={video}/></Link>))}
    </div>
    </main>
  
  )
}

export default VideoSearchPage