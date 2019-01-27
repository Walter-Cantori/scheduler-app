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


class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      phone: PropTypes.string,
      error: PropTypes.string,
    }).isRequired,
    loginRequest: PropTypes.func.isRequired,
  };

  state = {
    phone: this.props.user.phone,
    password: '',
  };

  componentDidUpdate() {
    if (this.props.user.error) {
      this.handleError();
    }
  }

  login = () => {
    if (!this.state.password || !this.state.phone) {
      this.handleError();
    } else {
      const { phone, password } = this.state;
      this.props.loginRequest(phone, password, this.props.navigation);
    }
  }

  handleError = () => {
    Alert.alert('Por favor verifique phone e senha');
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
          <Icon style={styles.Icon} size={14} color="#DADADA" name="lock" />
          <TextInput
            style={styles.input}
            placeholder="Sua senha secreta"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            placeholderTextColor={colors.whiteTitles}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.buttonText}>
            Criar conta grátis
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
