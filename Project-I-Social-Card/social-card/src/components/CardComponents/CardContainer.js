import React from 'react';
import './Card.scss';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div>
            <CardBanner />
            <CardContent />
        </div>
    )
}

export default CardContainer;