import React, { useState } from 'react';
import './Home.css'
import Popup from './Popup';

const Home = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [error, setError] = useState('');
    const [bmi, setBmi] = useState(null);
    const [result, setResult] = useState('');
    const [showPopup, setShowPopup] = useState(false)

    const submitHandler = (event) => {
        event.preventDefault();
        setError('');
        const heightMeter = height / 100;
        const BmiCalc = weight / (heightMeter * heightMeter);
        setBmi(BmiCalc.toFixed(2));

        let bmiCategory = '';
        if (BmiCalc < 18.5) {
            bmiCategory = 'Underweight';
        } else if (BmiCalc >= 18.5 && BmiCalc <= 24.9) {
            bmiCategory = 'Normal Weight';
        } else if (BmiCalc >= 25 && BmiCalc <= 29.9) {
            bmiCategory = 'Overweight';
        } else {
            bmiCategory = 'Obese';
        }

        setResult(bmiCategory);

        setTimeout(() => {
            setShowPopup(true)
        }, 3000);

        setTimeout(() => {
            setWeight('');
            setHeight('');
            setBmi('');
            setResult('');
            setShowPopup(false)
        }, 5000);

    }
    const restClick = (event) => {
        event.preventDefault();
        setWeight('');
        setHeight('');
        setBmi('');
        setResult('');
        setShowPopup(false)

    }
    return (
        <div className='main-contain'>
            <div className="container">
                <h1 className='heading'>BMI CALCULATOR</h1>
                <div className="weight">
                    <p className='head'>Weight(kg)</p>
                    <input
                        type="number"
                        placeholder='Please insert your weight'
                        value={weight}
                        id='weight'
                        onChange={(e) => setWeight(e.target.value)} required />
                </div>
                <div className="height">
                    <p className='head'>Height(in)</p>
                    <input
                        type="number"
                        placeholder='Please insert your height'
                        value={height}
                        id='weight'
                        onChange={(e) => setHeight(e.target.value)} required />
                </div>
                {error && <p className="">{error}</p>}
                <div className="btn">
                    <button className='submit' onClick={submitHandler}>Submit</button>
                    <button className="reload" onClick={restClick}>Reload</button>
                </div>
                <p className="output">{bmi ? `Your BMI is: ${bmi}` : ''}</p>
            </div>
            {showPopup && <Popup result={result} />}
        </div>
    )
}

export default Home