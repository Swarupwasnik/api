import React from 'react'
import '../component/Bollywood.css'
import {Link} from 'react-router-dom'

const Block2 = (props) => {
    const { img, description, title, category,id}=props;
  return (
    
         <Link to={`/${category}/${id}` } state={{img:img,category:category, description:description,title:title,id:id}} >
        
        
         <div className='block_home' >
              <img className='block_img_home' src={img} alt='found' />
             <div className='bolly_container' >
             <h4 className='block_title_home' >{title}</h4>
              <p className='block_description_home' >{description}</p>
              <p className='category_home' ><b>{category}</b></p>
             </div>
          </div>  
          
          </Link>
  )
}

export default Block2
