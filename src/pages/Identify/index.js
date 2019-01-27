import React, { Component } from 'react';
import {
  Text, View, TextInput, TouchableOpacity, StatusBar, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from '../../store/ducks/auth';

import { colors } from '../../styles';
import styles from './styles';


class Identify extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    checkPhoneRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    phone: '',
  };

  submit = () => {
    if (this.state.phone.length !== 11) {
      Alert.alert('Número de telefone deve conter 11 digitos');
    } else {
      let hasNaN = false;
      this.state.phone.split('').forEach((n) => {
        if (Number.isNaN(parseInt(n, 10))) hasNaN = true;
      });
      if (hasNaN) {
        Alert.alert('Número de telefone deve conter apenas digitos');
      } else {
        this.props.checkPhoneRequest(this.state.phone, this.props.navigation);
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>
          Scheduler
        </Text>
        <View style={styles.inputContainer}>
          <Icon style={styles.Icon} size={14} color="#DADADA" name="phone-classic" />
          <TextInput
            keyboardType="number-pad"
            maxLength={11}
            style={styles.input}
            placeholder="Seu número de telefone com 11 números"
            placeholderTextColor={colors.whiteTitles}
            value={String(this.state.phone)}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <TouchableOpacity onPress={this.submit} style={styles.button}>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const dispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(null, dispatchToProps)(Identify);
