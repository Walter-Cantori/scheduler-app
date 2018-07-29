import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

const Delete = () => (
  <View style={styles.container} >
    <TouchableOpacity onPress={() => {alert('test')}}>
      <Icon size={20} color="#FFFF" name="x" />
    </TouchableOpacity>
  </View>
);

export default Delete;
