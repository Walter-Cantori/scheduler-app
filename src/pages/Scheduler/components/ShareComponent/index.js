import React, { Component } from 'react';
import { View, TouchableOpacity, Share } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

class ShareComponent extends Component {
  shareContent = () => {
    Share.share({
      message: 'BAM: we\'re helping your business with awesome React Native apps',
      url: 'http://bam.tech',
      title: 'Wow, did you see that?',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.shareContent}>
          <Icon style={styles.Icon} size={20} color="#FFFF" name="share" />
        </TouchableOpacity>
      </View>
    );
  }
}


export default ShareComponent;
