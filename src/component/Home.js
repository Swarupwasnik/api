import React, { useContext } from 'react'
import Blockhome from '../Blocks/Blockhome'
import Block2 from '../Blocks/Block2'
import Blocktoppost from '../Blocks/Blocktoppost'
import { store } from './Detail'     
import { Link } from 'react-router-dom'              

const Home = () => {
  const [response] = useContext(store)
  return (
    <section>
      <div className='home_top'>

        {response.filter((e) => (e.category === "food" && e.id === "52")).map((c) => {
          return (<Link to='/food'><img className='top_img_home' src={c.img}  alt="sdrfg"  /></Link>)
        })
        }
        <div className='Extra_div_home'>
          {response.filter((e) => (e.category === "hollywood" && e.id === "35")).map((c) => {
            return (<Link to='/Sport'><img className='top_img_home_1' src={c.img} alt="fgs" /></Link>

            )
          })
          }
          {response.filter((e) => (e.category === "technology" && e.id === "27")).map((c) => {
            return (<Link to='/technology'><img className='top_img_home_1' src={c.img} alt="sfdg" /></Link>)
          })
          }
        </div>

        <div className='blockhome_middle'>
        </div>
      </div>
      <h1 className='latest_posts_text'>The Latest</h1>
      <hr className='hr' />
      <div className='home_section'>
        <div>
          {response.filter((e) => (e.id === "12")).map((c) => {
            return (<Blockhome
              id={c.id}
              img={c.img}
              title={c.title}
              description={c.description}
              date={c.date}
              category={c.category}
            /> )
          })
          }
        </div>
        <div>
          {response.filter((e) => (e.id === "37")).map((c) => {
            return (<Blockhome
              id={c.id}
              img={c.img}
              title={c.title}
              description={c.description}
              date={c.date}
              category={c.category}
            />)
          })
          }
        </div>
        <div>
          {response.filter((e) => (e.id === "8")).map((c) => {
            return (<Blockhome
              id={c.id}
              img={c.img}
              title={c.title}
              description={c.description}
              date={c.date}
              category={c.category}
            />)
          })
          }
        </div>
      </div>
     <div className='container3'>

     <div>
        <h1 className='latest_posts_text' >Latest Articles</h1>
        <hr className='hr' />

        {response.filter((e) => (e.category === "food" && e.id === '47' )).map((c) => {
          return (<Block2
            id={c.id}
            img={c.img}
            title={c.title}
            description={c.description}
            date={c.date}
            category={c.category} />)
        })
        }
        {response.filter((e) => (e.category === "technology" && e.id === '23' )).map((c) => {
          return (<Block2
            id={c.id}
            img={c.img}
            title={c.title}
            description={c.description}
            date={c.date}
            category={c.category} />)
        })
        }
        {response.filter((e) => (e.category === "fitness" && e.id === '22' )).map((c) => {
          return (<Block2
            id={c.id}
            img={c.img}
            title={c.title}
            description={c.description}
            date={c.date}
            category={c.category} />)
        })
        }
        {response.filter((e) => (e.category === "fitness" && e.id === '40' )).map((c) => {
          return (<Block2
            id={c.id}
            img={c.img}
            title={c.title}
            description={c.description}
            date={c.date}
            category={c.category} />)
        })
        }
        {response.filter((e) => (e.category === "bollywood" && e.id === '9' )).map((c) => {
          return (<Block2
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
          <h1 className='top'>Top Articles </h1>
          <hr className='hr' />
          {response.filter((e) => (e.category === "hollywood" && e.id === '36')).map((c) => {
            return (<Blocktoppost
              img={c.img}
              title={c.title}
            />)
          })
          }
          {response.filter((e) => (e.category === "bollywood" && e.id === '8')).map((c) => {
            return (<Blocktoppost
              img={c.img}
              title={c.title}
            />)
          })
          }
          {response.filter((e) => (e.category === "food" && e.id === '19')).map((c) => {
            return (<Blocktoppost
              img={c.img}
              title={c.title}
            />)
          })
          }
          {response.filter((e) => (e.category === "technology" && e.id === '59')).map((c) => {
            return (<Blocktoppost
              img={c.img}
              title={c.title}
            />)
          })
          }
          {response.filter((e) => (e.category === "bollywood" && e.id === '41')).map((c) => {
            return (<Blocktoppost
              img={c.img}
              title={c.title}
            />)
          })
          }
          {response.filter((e) => (e.category === "food" && e.id === '27')).map((c) => {
            return (<Blocktoppost
              img={c.img}
              title={c.title}
            />)
          })
          }
          {response.filter((e) => (e.category === "fitness" && e.id === '38')).map((c) => {
            return (<Blocktoppost
              img={c.img}
              title={c.title}
            />)
          })
          }
        </div>

        <div className='advertisement' >Advertisement</div>
      </div>


     </div>
 
     <h1 className='latest_posts_text'>Latest Stories</h1>
     <hr className='hr' />
      <div className='home_section'>
        <div>
          {response.filter((e) => (e.id === "12")).map((c) => {
            return (<Blockhome
              id={c.id}
              img={c.img}
              title={c.title}
              description={c.description}
              date={c.date}
              category={c.category}
            />)
          })
          }
        </div>
        <div>
          {response.filter((e) => (e.id === "37")).map((c) => {
            return (<Blockhome
              id={c.id}
              img={c.img}
              title={c.title}
              description={c.description}
              date={c.date}
              category={c.category}
            />)
          })
          }
        </div>
        <div>
          {response.filter((e) => (e.id === "8")).map((c) => {
            return (<Blockhome
              id={c.id}
              img={c.img}
              title={c.title}
              description={c.description}
              date={c.date}
              category={c.category}
            />)
          })
          }
        </div>
      </div>
     


    </section>
  )
}

export default Home;
