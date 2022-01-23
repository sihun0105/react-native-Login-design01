import React from 'react';
import {Header, Body, Footer} from './index';

function Posts({name, imageUrl, location, likesCount, caption, time}) {
  return (
    <>
      <Header imageUrl={imageUrl} name={name} location={location} />
      <Body imageUrl={imageUrl} />
      <Footer
        likesCount={likesCount}
        name={name}
        caption={caption}
        time={time}
      />
    </>
  );
}

export default Posts;
