import React, { useContext } from 'react'
import { store } from './Detail'
import Blockbollywood from '../Blocks/Block2'
import Blocktoppost from '../Blocks/Blocktoppost'


const Bollywood = () => {
  const [response] = useContext(store)

  // const [detail, setDetail] = useContext(store)
  return (
    <div className='main_container' >
      <div>
        <h1 className='heading_tourism' >Bollywood</h1>

        {response.filter((e) => (e.category === "bollywood")).map((c) => {
          return (<Blockbollywood
            id={c.id}
            img={c.img}
            title={c.title}
            description={c.description}
            date={c.date}
            category={c.category} />)
        })
        }
      </div>

      <div>

        <div>
          <h1>Top Post</h1>
          {response.filter((e) => (e.category === "bollywood")).map((c) => {
            return (<Blocktoppost
              img={c.img}
              title={c.title}
              category={c.category}
            />)
          })
          }
        </div>

        <div className='advertisement' >Advertisement</div>
      </div>


    </div>
  )
}

export default Bollywood