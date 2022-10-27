import React from 'react';
import HomePageBody from '../../components/homepagebody/homepagebody.components';
import "./landingpage.styles.css"
import CustomButton from '../../components/custom-button/custom-button.component';
import { ReactComponent as CaretDown } from '../../components/asset/caret-down.svg';




 const Homepage = () => {
    const handleClick = (e) => {
        e.target.scrollTo(0,0)
    }
    
    return (
        <section id="homepage">
            <div className='homepage-img'>
                <div className="fill-up">
                    <span className="place1">Best&nbsp;in&nbsp;Nigeria,Africa</span>
                    <span className="place2">9JA&nbsp;Destinations</span>
                    <span className="place3">Your one stop online kitchen for all the nigerian mouth watering dishes that brings amazing satisfaction, and you will never seek food anywhere else</span>
                    <div className="place4">
                        <CustomButton buttonType="Btn1">Book&nbsp;reservation</CustomButton>
                        <CustomButton buttonType="Btn2">See&nbsp;menu</CustomButton>
                    </div>
                </div>
            </div>
            <HomePageBody />
            <span onClick={(e) => handleClick(e)} id='scroll-top'><CaretDown /></span>
        </section>
    )};

 export default Homepage;
