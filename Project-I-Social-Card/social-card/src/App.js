import React from 'react';
import './App.scss';

import UserThumbnail from './components/PostComponents/UserThumbnail';
import PostContent from './components/PostComponents/PostContent'

const App = () => {
  return (
    <div>
      <UserThumbnail />
      <PostContent />
    </div>
  );
};

export default App;
