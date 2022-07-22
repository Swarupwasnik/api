import React from 'react'
import { useLocation } from 'react-router-dom'

const DataSender = () => {
  const location = useLocation()
  const { img, description, title, category } = location.state
  console.log(location);
  return (
   <section className='Nmain'>
     <div className='Ncontainer'>
      <h1 className='Ntitle'>{title}</h1>
      <div className='Nicon'><i class="fa-solid fa-address-card"></i> Deniel Gayle</div>
      <img className='Nimg' src={img} alt="code" />
      <h2 className='Ncategory'>{category}</h2>
      <p className='Ndescription'>{description}</p>
      

    </div>
   </section>
  )
}

export default DataSender