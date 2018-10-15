import React, { Component } from 'react';
import './headerTabs.css';
import ImageSlider from "./imageSlider";
import MealPlansTab from "./MealPlansTab";


class HeaderTabs extends Component {

    render() { 
return ( 
    <React.Fragment>
        <div className="tabsBody">spicebox
        <div className="tabsButtons">Home</div>
        <div className="tabsButtons">Meal Plans</div>
        <div className="tabsButtons">Why Us?</div>
        <div className="tabsButtons">Reviews</div>
        <div className="tabsButtons">Support</div>
        <div className="orderButton">ORDER NOW</div>

        </div>

        <ImageSlider/>
        <MealPlansTab/>



    </React.Fragment> 
    );
    }
}
 
export default HeaderTabs;