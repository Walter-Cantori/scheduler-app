import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const Share = () => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => { alert('test'); }}>
      <Icon style={styles.Icon} size={20} color="#FFFF" name="share" />
    </TouchableOpacity>
  </View>
);

export default Share;
