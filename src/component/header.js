import './header.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const Logo=(props)=>{
    return(
        <span className="logo">{props.text}</span>
    )
}
const Navlist=()=>{
    
const [isopen,setOpen]=useState(false);

const handlerlist=()=>{
    setOpen(!isopen);
}
return(
    <>
    <div className='list_items'>
        <ul className={isopen?'active':'notactive'}>
            <Link to='/' className='li'>HOME</Link>
            <Link to='/AboutUs' className='li'>ABOUT US</Link>
            <Link to='/Menu'className='li'>MENU</Link>
            <Link to='/Reservation' className='li'>RESERVATION</Link>
            <Link to='/Gallery' className='li'>GALLERY</Link>
            <Link to='/Contact' className='li'>CONTACT</Link>
        </ul>
    </div>
    <div className='social'>
        <ul className="icons">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f "></i>
            <i className="fa-brands fa-youtube"></i>            
        </ul>
        <button>BOOK A TABLE</button>
    </div>
    <span className='toggler' onClick={handlerlist}><i className="fa-solid fa-bars"></i></span>
    </>
    )
}

const Navbar=()=>{
    return(
        <div className="nav_container">
                <Logo text='fable'/>
                <Navlist />
        </div>
    )
}

export default Navbar;