import React,{useContext} from 'react';
import {store} from "./Detail"
import BlockFood from '../Blocks/Block2';
import Blocktoppost from '../Blocks/Blocktoppost';

let Food =()=>{
    let[response]=useContext(store)



    return(

        <div className='main_container'>
<div>
    <h1>Food</h1>
    {response.filter((e)=>(e.category==="food")).map((k)=>{
        return(<BlockFood id={k.id} img={k.img} title={k.title} description={k.description} category={k.category}/>)
    })}
</div>
<diV>

<h1>Top Post</h1>
          {response.filter((e) => (e.category === "bollywood")).map((c) => {
            return (<Blocktoppost
              img={c.img}
              title={c.title}
              category={c.category}
            />)
          })
          }

</diV>

<div className='advertisement'>Advertisement</div>

        </div>
    )
}
export default Food;