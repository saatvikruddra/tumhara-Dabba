import React, { Component } from 'react';
import "./headerTabs.css";

class MealPlansTab extends Component {

    render() { 
return ( 
<div className="containerMealPlan">
    <div className="MealPlanTitle"></div>
    <div className="vegNonVeg"></div>
    <div className="mealPlans">
        <div className="stadard"></div>
        <div className="minimeals"></div>
    </div>
</div>


         );
    }
}
 
export default MealPlansTab;