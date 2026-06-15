import { Content } from "../component/landing";
import '../component/aboutUs.css'

const Image=(props)=>{
    return(
        <div className={props.className} ><img src= {props.src} alt="img"/></div>
    )
}

const Landing=()=>{
    return(
        <div className="landing gen">
            <Content h1='True Pation' h2='NATURAL FLAVOURS' p='Opened in February 2016, La Cuisine is the largest restaurants in London.A bustling atmospheric restaurant, with a huge open kitchen.'/>
        </div>
    )
}


const Text=()=>{
    return(
        <div className="text col-lg-6 py-3">
            <Content h1='Dicover' h2='BEST RECIPES' p='urabitur quas nets lacus ets nulat iaculis loremis etis nisle varius vitae seditum
            fugiatum ligula aliquam qui sequi. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit rutrum eleif arcu sit aspernatur nets fugit, sed quia'/>
            <button>OUR RECIPES</button>
        </div>
    )
}

const Imgsec3=()=>{
    return(
        <div className='img_section3'>
            <img src="pic3.png" alt='img' />
        </div>
    )
}

const Discover=()=>{
    return(
        <>
        <div className='row mx-5 my-5'>
            <Image src='pic2.jpg' className='img_container col-lg-6'/>
            <Text />
        </div>
            <Imgsec3 />
        </>
    )
}

// ===========section4============

const Sec4=()=>{
return(
<>
<div className='sec4_container mx-5 mt-3'>
    <div className='row '>
        <div className='text col-lg-6 py-3'>
            <Content h1='Dicover' h2='OUR CHEFS' p='Curabitur quas nets lacus ets nulat iaculis loremis etis nisle varius vitae seditum
            fugiatum ligula aliquam qui sequi. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit rutrum eleif arcu sit aspernatur nets fugit, sedit quiadused
            fuscentinusad sagittis odio magna, in ultricies ex tincidunt.'/>
            <Image src='pic5.png' className='mx-auto w-25' />
        </div>
        <Image src='pic4.jpg' className=' col-lg-6 chef px-5' />
    </div>
</div>
</>

    )
}


const AboutUs=()=>{
    return(
        <>
        <Landing />
        <Discover />
        <Sec4 />
        </>
    )
}

export default AboutUs;
