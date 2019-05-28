import React from 'react';
import './Button.css';

const NumericInputs = () => {
    return (
        <div className='numeric-inputs'>
            <div className='number-row'>
                <div className='number-button'>
                    <p>7</p>
                </div>
                <div className='number-button'>
                    <p>8</p>
                </div>
                <div className='number-button'>
                    <p>9</p>
                </div>
            </div>
            <div className='number-row'>
                <div className='number-button'>
                    <p>4</p>
                </div>
                <div className='number-button'>
                    <p>5</p>
                </div>
                <div className='number-button'>
                    <p>6</p>
                </div>
            </div>
            <div className='number-row'>
                <div className='number-button'>
                    <p>1</p>
                </div>
                <div className='number-button'>
                    <p>2</p>
                </div>
                <div className='number-button'>
                    <p>3</p>
                </div>
            </div>
            <div className='zero-row'>
                <p>0</p>
            </div>
        </div>
    )
}

export default NumericInputs;