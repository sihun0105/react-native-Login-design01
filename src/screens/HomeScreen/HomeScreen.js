import React from 'react';
import {FlatList} from 'react-native';

import Screen from '../../components/Screen';
import Stories from '../../components/Stories';
import Posts from '../../components/posts/Posts';
import UserPosts from '../../data/posts';
import HomeHeader from '../../components/HomeHeader';

function HomeScreen(props) {
  return (
    <Screen>
      <HomeHeader />
      <FlatList
        data={UserPosts}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => (
          <Posts
            name={item.name}
            imageUrl={item.imageUrl}
            location={item.location}
            likesCount={item.likesCount}
            caption={item.caption}
            time={item.time}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={Stories}
      />
    </Screen>
  );
}

export default HomeScreen;
