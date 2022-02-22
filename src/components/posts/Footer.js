import React, {useState} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import AppText from '../Sns/AppText';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../config/Colors';

function Footer({likesCount, name, caption, time}) {
  const [isLiked, setIsLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(likesCount);

  const handleLiked = () => {
    !isLiked
      ? setNumberOfLikes(numberOfLikes + 1)
      : setNumberOfLikes(numberOfLikes - 1);
    setIsLiked(!isLiked);
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={handleLiked}>
            {isLiked ? (
              <ADIcon name="heart" size={25} color={'#ff0800'} />
            ) : (
              <ADIcon name="hearto" size={25} color={'#545454'} />
            )}
          </TouchableWithoutFeedback>
          <FontistoIcon name="comment" size={23} color={'#545454'} />
          <IoniconsIcon
            name="paper-plane-outline"
            size={25}
            color={'#545454'}
          />
        </View>
        <FAIcon name="bookmark-o" size={25} color={'#545454'} />
      </View>
      <AppText style={styles.likes}>{numberOfLikes} likes</AppText>

      {caption && (
        <AppText style={styles.name} numberOfLines={3}>
          {name} <AppText style={styles.caption}>{caption}</AppText>
        </AppText>
      )}

      <AppText style={styles.time}>{time}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  leftIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  likes: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  time: {
    fontSize: 14,
    color: Colors.darkGray,
  },
});
export default Footer;
