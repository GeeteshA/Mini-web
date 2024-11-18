import React from 'react';
import './Home.css';

const Popup = ({ result }) => {

    const getBmiColor = (bmiCategory) => {
        switch (bmiCategory) {
            case 'Underweight':
                return 'yellow';  
            case 'Normal Weight':
                return 'green';  
            case 'Overweight':
                return 'orange';  
            case 'Obese':
                return 'red'; 
            default:
                return 'black';  
        }
    };
    return (
        <div className="popup-overlay">
            <div className="popup">
                <p className='pop' style={{ color: getBmiColor(result)}}>Your are: {result}</p>
            </div>
        </div>
    );
};

export default Popup;
