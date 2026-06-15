import React from 'react';
import Breakfast from '../component/Breakfast';
import MainCourse from '../component/MainCourse';
import Dinner from '../component/Dinner';
import Drink from '../component/Drinks';
import ChickenSection from '../component/ChickenSection';
import CookingHeader from '../component/CookingHeader';
import Slide from '../component/Slide';
import HorizontalImageBox from '../component/HorizontalImageBox';
import { Content } from "../component/landing";
import '../component/menu.css'


const Landing=()=>{
    return(
        <div className="landing menulanding">
            <Content h1='Our Menu' h2='FOOD & DRINKS' p='An unforgettable dining experience in the heart of Covent Garden, London.Contemporary british menu, inspired by the traditions of Great Britain.'/>
        </div>
    )
}

function MenuElement() {
  return (
    <div>
      <div className="menu-container">
        <Breakfast />
        <MainCourse />
      </div>

      <div className="menu-container">
        <Dinner />
        <Drink />
      </div>
      <ChickenSection />
      <CookingHeader />
      <Slide />
      <HorizontalImageBox />
    </div>
  );
}

const Menu=()=>{
  return(
    <>
    <Landing />
    <MenuElement />
    </>
  )
}

export default Menu;
