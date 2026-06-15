import './imgs_gallery.css'

import { arr2 } from './footer';

const Img=(props)=>{
    return(
        <div className="column">
            <div className='img-container'><img src={props.src} alt="img" /></div>
        </div>
    )
}

const arr=[...arr2,{src:"food7.jpg"},
    {src:"food8.jpg"},
    {src:"food9.jpg"},]

const Menu=()=>{
    return (
    <div className="menu">
    {
        arr.map((e,i)=>{
            return(
            <Img src={e.src} key={i}/>
            )
        })
    }
    </div>
    )

}

export default Menu;
