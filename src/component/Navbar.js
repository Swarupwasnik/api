import React from 'react'
import { Link } from 'react-router-dom'


import '../style.css'

const Navbar = () => {
    return (
        <div className='navbar_container' >

            <nav  className="navbar navbar-expand-lg">
               < div  className="brand" to="/"> <p className='the' >The</p><strong className='swar'>Siren</strong></div>
                {/* <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span  className="navbar-toggler-icon"></span>
                </button> */}
                <div  className="link" id="navbarNavAltMarkup">
                    {/* <div  className="navbar">
                        <Link  className="nav-item nav-link active" to="/home">Home</Link>
                        <Link  className="nav-item nav-link" to="/bollywood">Bollywood</Link>
                        <Link  className="nav-item nav-link" to="/technology">Technology</Link>
                        <Link  className="nav-item nav-link" to="/hollywood">Hollywood</Link>
                        <Link  className="nav-item nav-link" to="/health">Health</Link>
                         
                        
                    </div> */}
<div className='navbar'>
    <Link className='linkname' to="/home">Home</Link>
    <Link className='linkname' to="/bollywood">Bollywood</Link>
    <Link className='linkname' to="/technology">Technology</Link>
    <Link className='linkname' to="/food">Food</Link>
    <Link className='linkname' to="/hollywood">Hollywood</Link>
    <Link className="linkname" to="/health">Health</Link>

    
 


</div>

                </div>
            </nav>
            <hr className='hr' />


        </div>
    )
}

export default Navbar;