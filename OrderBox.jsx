import React, { Component } from 'react';
import "./headerTabs.css";

class OrderBox extends Component {
    
render() { 
return ( 
<React.Fragment>
    <div className="OrderNowContainer">
        <div className="ONright">
        SELECT MEAL TIME
            <div className="ONrightHorizontal">
                <div className="MealBoxDesign"></div>
                <div className="MealBoxDesign"></div>
                <div className="MealBoxDesign"></div>
                <div className="MealBoxDesign"></div>
            </div>     
            Please Order For Tomorrow & Coming Days.
                Select Meal Plan
        </div>
        <div className="ONleft"></div>

    </div>

</React.Fragment>
         );
    }
}
 
export default OrderBox;