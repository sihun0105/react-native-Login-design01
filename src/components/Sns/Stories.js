import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import Users from '../../data/users';
import Story from './Story';
import Colors from '../../config/Colors';
function Stories(props) {
  return (
    <FlatList
      data={Users}
      keyExtractor={user => user.id.toString()}
      renderItem={({item}) => (
        <Story imageUrl={item.imageUrl} name={item.name} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.stories}
    />
  );
}

const styles = StyleSheet.create({
  stories: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    paddingBottom: 7,
  },
});
export default Stories;
