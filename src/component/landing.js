import './landing.css'

const Content=(props)=>{
    return(
        <div className="content">
            <h1>{props.h1}</h1>
            <div className='h2'><h2>{props.h2}</h2></div>
            <p>{props.p}</p>
        </div>
    )
}

const Landing=()=>{
    return(
        <div className="landing">
            <Content h1='True Pation' h2='NATURAL FLAVOURS' p='An unforgettable dining experience in the heart of covent garden,london.
                contemporary british menu,inspired by the traditions of great britain.'/>
        </div>
    )
}
export {Content};
export default Landing;