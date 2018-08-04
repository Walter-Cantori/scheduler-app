import React from 'react';
import {
  Text, View, TextInput, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import { colors } from '../../styles';
import styles from './styles';


const Register = props => (
  <View style={styles.container}>
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
        placeholder="Sua senha secreta"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={colors.whiteTitles}
      />
    </View>
    <View style={styles.inputContainer}>
      <Icon style={styles.Icon} size={14} color="#DADADA" name="lock" />
      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={colors.whiteTitles}
      />
    </View>
    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Scheduler')}>
      <Text style={styles.buttonText}>
        Criar conta grátis
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
      <Text style={styles.linkText}>
        Já tenho conta
      </Text>
    </TouchableOpacity>
  </View>
);

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Register.navigationOptions = {
  header: null,
};

export default Register;
