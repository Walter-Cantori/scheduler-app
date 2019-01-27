import React, { Component } from 'react';
import {
  Text, View, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { colors } from '../../styles';
import styles from './styles';
import { Creators as AuthActions } from '../../store/ducks/auth';


class Register extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      phone: PropTypes.string.isRequired,
      error: PropTypes.string,
    }).isRequired,
    registerRequest: PropTypes.func.isRequired,
  };

  state = {
    phone: this.props.user.phone,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  componentDidUpdate() {
    if (this.props.user.error) {
      this.handleError();
    }
  }

  register = () => {
    if (!this.state.password || !this.state.phone || !this.state.name
      || !this.state.confirmPassword || !this.state.email) {
      this.handleError();
    } else {
      const userInfo = this.state;
      this.props.registerRequest(userInfo, this.props.navigation);
    }
  }

  handleError = () => {
    Alert.alert('Por favor verifique suas informações');
  }

  render() {
    return (
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
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
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
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon style={styles.Icon} size={14} color="#DADADA" name="email" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={colors.whiteTitles}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
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
            value={this.state.password}
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon style={styles.Icon} size={14} color="#DADADA" name="lock" />
          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            placeholderTextColor={colors.whiteTitles}
            value={this.state.confirmPassword}
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.register}>
          <Text style={styles.buttonText}>
            Criar conta grátis
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.linkText}>
            Já tenho conta
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapsStateToProps = state => ({
  user: state.auth,
});

const mapsDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(mapsStateToProps, mapsDispatchToProps)(Register);
