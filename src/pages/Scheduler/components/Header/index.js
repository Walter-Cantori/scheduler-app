import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import NewEvent from '../NewEvent';


class Header extends Component {
  state = {
    showModal: false,
  };

  closeModal = () => {
    this.setState({ showModal: false });
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <NewEvent visible={this.state.showModal} closeModal={this.closeModal} />
        <TouchableOpacity onPress={this.openModal} style={styles.newEvent}>
          <Text style={styles.plus}>
            +
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          SCHEDULER
        </Text>
        <TouchableOpacity onPress={this.props.openMyAccount}>
          <Icon size={24} color="#DADADA" name="account" />
        </TouchableOpacity>
      </View>
    );
  }
}


export default Header;
