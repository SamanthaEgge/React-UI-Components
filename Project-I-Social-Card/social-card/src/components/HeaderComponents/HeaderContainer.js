import React from 'react';
import './Header.scss';

import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <div>
            <HeaderTitle />
            <HeaderContent />
        </div>
    )
}

export default HeaderContainer;