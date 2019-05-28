import React from 'react';
import './Button.css';

import NumericInputs from './NumericInputs';
import MathOperators from './MathOperators';

const ButtonContainer = () => {
    return  (
        <div className='button-container'>
            <NumericInputs />
            <MathOperators />
        </div>
    )
}

export default ButtonContainer;