import React from 'react'

import { Link } from 'react-router-dom'


const Blockhome = (props) => {
  const { img, description, title, category, id } = props;
  return (

    <Link to={`/${category}/${id}`} state={{ img: img, category: category, id: id, description: description, title: title }} >

      <div className='block_home_middle_container' >
        <img className='block_home_img_middle' src={img} alt='not found' />
        <div className='block_home_middle'>
          <h2 className='block_title_home_middle' >{title}</h2>
          <p className='block_description_home_middle' >{description}</p>
          <p className='category_home_middle' ><b>{category}</b></p>
        </div>

      </div>
      </Link>
  )}
  export  default Blockhome;