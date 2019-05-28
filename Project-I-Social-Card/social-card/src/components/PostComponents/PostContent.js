import React from 'react';
import './Post.scss';

import HeaderContainer from '../HeaderComponents/HeaderContainer'
import CardContainer from '../CardComponents/CardContainer'
import Footer from '../FooterComponents/Footer'

const PostContent = () => {
    return(
        <div className='post-container'>
            <HeaderContainer />
            <CardContainer />
            <Footer />
        </div>
    )
}

export default PostContent;