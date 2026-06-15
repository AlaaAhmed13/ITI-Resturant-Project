import OurStory from '../component/OurStory'; 
import Flavours from '../component/Flavours';
import OurChefs from '../component/OurChefs';
import { Content } from "../component/landing";
import Slide from './../component/Slide';
import ChickenSection from '../component/ChickenSection';
import CookingHeader from '../component/CookingHeader';
import HorizontalImageBox from '../component/HorizontalImageBox';
import HomeBoxes from '../component/Home_boxs';

const Landing=()=>{
    return(
        <div className="landing HomeLanding">
            <Content h1='FRENCH CUISINE' h2='We’re Know for Great French Cooking' p='DISCOVER STORY'/>
        </div>
    )
}

const Home=()=>{
    return(
        <>
            <Landing />
            <OurStory />
            <Flavours />
            <OurChefs />
            <ChickenSection />
            <HomeBoxes />
            <CookingHeader />
            <Slide />
            <HorizontalImageBox />
        </>
    )
}

export default Home;