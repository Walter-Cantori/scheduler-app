import React from 'react';
import {
  Text, View, TextInput, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../../styles';
import styles from './styles';


const myAccount = props => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Minha Conta
    </Text>
    <View style={styles.inputContainer}>
      <Icon style={styles.Icon} size={14} color="#DADADA" name="account" />
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={colors.whiteTitles}
      />
    </View>
    <View style={styles.inputContainer}>
      <Icon style={styles.Icon} size={14} color="#DADADA" name="lock" />
      <TextInput
        style={styles.input}
        placeholder="Quer alterar sua senha?"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={colors.whiteTitles}
      />
    </View>
    <View style={styles.inputContainer}>
      <Icon style={styles.Icon} size={14} color="#DADADA" name="lock" />
      <TextInput
        style={styles.input}
        placeholder="Confirme a senha digitada"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={colors.whiteTitles}
      />
    </View>
    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Scheduler')}>
      <Text style={styles.buttonText}>
        Alterar informações
      </Text>
    </TouchableOpacity>
  </View>
);

myAccount.navigationOptions = {
  title: 'SCHEDULER',
  headerTitleStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    width: '70%',
  },
};

export default myAccount;
