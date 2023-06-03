import React, { useId } from 'react'
import Button from './Button'

const list = ["All",'Game',"Anime","Live","Sports","Cricket","Football",'VCT']
const ButtonList = () => {
  const id=useId()
 
  return(
    <div className='flex sticky top-24 z-30 bg-white'>
      {list.map((item,index)=>(<Button name={item} key={`button-list-${id}-${index}`}/>))}
    </div>
  )
}

export default ButtonList