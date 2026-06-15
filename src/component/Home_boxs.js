import './Home_boxs.css'

const Box=(props)=>{
return(
    <div className='box_container col-lg-4 col-md-6'>
        <div class='im_container'><img src={props.src} alt='img'/></div>
        <div className='box_content'>
            <h2>{props.h2}</h2>
            <p>Quis autem velis et reprehender etims quiste 
                voluptate velit esse quam nihil etsa illum sedit 
                consequatur quias voluptas sit netsum.</p>
            <button>DISCOVER MORE</button>
        </div>
    </div>
)
}


const Array=[{src:"food5.jpg",h2:'Brownies and Coffee'},
    {src:'food4.jpg',h2:'Oldest London Pub'},
    {src:'im3.jpg',h2:'New Cooking Recipes'}]

const HomeBoxes=()=>{
    return(
        <>
        <div className='boxes_title'>
            <h2>Latest News</h2>
            <h2>DELICIOUS RECIPES</h2>
        </div>
      <div className='boxes_container row'>
        {
            Array.map((e,i)=>{
                return(
                        <Box src={e.src} h2={e.h2} key={i} />
                    )
            })
        } 
    </div>
        </>
    )
}

export default HomeBoxes;