import React from 'react';
import './Button.css';

import ClearButton from './ClearButton';
import NumericInputs from './NumericInputs';
import MathOperators from './MathOperators';

const ButtonContainer = () => {
    return  (
        <div className='button-container'>
            <div className='left-buttons'>
                <ClearButton />
                <NumericInputs />
            </div>
            <div className='right-buttons'>
                <MathOperators />
            </div>
        </div>
    )
}

export default ButtonContainer;