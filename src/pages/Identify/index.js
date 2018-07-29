import React from 'react';
import {
  Text, View, TextInput, TouchableOpacity, StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../../styles';
import styles from './styles';


const Identify = props => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>
      Scheduler
    </Text>
    <View style={styles.inputContainer}>
      <Icon style={styles.Icon} size={14} color="#DADADA" name="phone-classic" />
      <TextInput
        style={styles.input}
        placeholder="Seu número de telefone"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={colors.whiteTitles}
      />
    </View>
    <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={styles.button}>
      <Text style={styles.buttonText}>
        Entrar
      </Text>
    </TouchableOpacity>
  </View>
);

Identify.navigationOptions = {
  header: null,
};

export default Identify;
