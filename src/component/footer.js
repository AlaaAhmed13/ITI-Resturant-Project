import "./footer.css"
import { Link } from 'react-router-dom';
const P=(props)=>{
    return <p>{props.text}</p>
}
const H4=(props)=>{
    return <div className="h4"><h4>{props.text}</h4></div>
}
const arr2=[{src:"food1.png"},
    {src:"food2.jpg"},
    {src:"food3.jpg"},
    {src:"food4.jpg"},
    {src:"food5.jpg"},
    {src:"food6.jpg"}]

const Arrtext=[
    {text:'Cheddar Cheese Cauliflower Tots'},
    {text:"Garlic Chicken & White Wine Sauce"},
    {text:"Spinach Mozzarella Grilled Cheese"},
    {text:"Mini Chicken Roasted Cups"}
]

const Imgfooter=(props)=>{
    return(
        <div className="Imgfooter_container"><img src={props.src} alt='img'/></div>
    )
}

const Section1footer=()=>{
    return(
        <div className="aboutUs main">
            <H4 text='ABOUT US'/>
            <p>Quis autem velis eti reprehender etimes quiste volupta velit esse quam nihil esta illum sedit consequatur quias</p>
            <button>OUR STORY</button>
        </div>
    )
}

const Section2footer=()=>{
    return(
    <div className="latest main">
        <H4 text='LATEST RECIPES' />
        {
            Arrtext.map((e,i)=>{
                return <P text={e.text} key={i}/>
            })
        }
    </div>
    )
}
const Section3footer=()=>{
    return(
        <div className="latest2 main">
            <H4 text='LATEST RECIPES' />
                <div className="basic">
                    {
                        arr2.map((e,i)=>{
                            return <Imgfooter src={e.src} key={i} />
                        })
                    }
                </div>
        </div>
    )
}

const Section4footer=()=>{
  return(
      <div className="contact main">
        <H4 text='CONTACT DETAILS'/>
        <p>Quis autem velis eti reprehender etimes quiste volupta velit esse quam nihil</p>
        <p ><i className="fa-solid fa-location-dot"></i> <span>Oxford street,london,UK,NIIED</span></p>
        <p><i className="fa-solid fa-phone "></i><span>+44987654321/ +44123456789</span></p>
        <p><i className="fa-solid fa-envelope "></i> <span>contact@restaurant.com</span></p>
    </div>
  )
}

const Final=()=>{
    return(
        <div className="final row">
            <p className="col-4">&copy; 2016-2018 Fable. Designed by Epic Agency</p>
            <Link to='' className="link">^</Link>
            <p className="col-4"><span>Follow Us:</span>
            <i class="fa-brands fa-twitter px-2"></i>
            <i class="fa-brands fa-facebook-f pr-2"></i>
            <i class="fa-brands fa-youtube pr-2"></i>
            <i class="fa-brands fa-square-instagram "></i>
            </p>
        </div>
    )
}


const Footer=()=>{
    return(
    <div className="footer">
        <div className="container">
            <Section1footer />
            <Section2footer />
            <Section3footer />
            <Section4footer />
            <Final />
        </div>
    </div>
    )
}

export default Footer;
export {arr2};
