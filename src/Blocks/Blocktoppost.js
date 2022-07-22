import React from 'react'
import '../component/Bollywood.css'
import {Link} from 'react-router-dom'

const Blocktoppost = (props) => {
    const { img,  title ,category,id }=props;
  return (
    <Link to={`/${category}/${id}` } state={{img:img,id:id,title:title}} >
        
          <div className='block_home' >
           
           <div className='top_post'>
           <img className='block_top_post_img' src={img} alt='not found' />
             <h4 className='block_top_post_title' >{title}</h4>
           </div>
          
            
          </div>
          
          </Link>
  )
}

export default Blocktoppost
