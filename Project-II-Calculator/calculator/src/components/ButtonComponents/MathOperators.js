import React from 'react';
import './Button.css';

const MathOperators = () => {
    return (
        <div className='math-operators'>
            <div className='operator-button'>
                <p>%</p>
            </div>
            <div className='operator-button'>
                <p>X</p>
            </div>
            <div className='operator-button'>
                <p>-</p>
            </div>
            <div className='operator-button'>
                <p>+</p>
            </div>
            <div className='operator-button'>
                <p>=</p>
            </div>
        </div>
    )
}

export default MathOperators;