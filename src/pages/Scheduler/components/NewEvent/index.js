import React, { Component } from 'react';
import {
  Modal, Text, View, TextInput, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';

import { colors } from '../../../../styles';
import styles from './styles';

class NewEvent extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  state = {
    date: '04-08-2018',
  };

  render() {
    const { visible, closeModal } = this.props;
    return (
      <Modal
        visible={visible}
        animationType="fade"
        onRequestClose={closeModal}
        transparent
      >
        <View style={styles.outterContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>
              Criar Evento
            </Text>
            <View style={styles.inputContainer}>
              <Icon style={styles.Icon} size={20} color={colors.greyInputText} name="calendar" />
              <DatePicker
                showIcon={false}
                date={this.state.date}
                mode="datetime"
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2018"
                maxDate="01-01-2999"
                confirmBtnText="Confirmar"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput: {
                    marginLeft: 0,
                    borderWidth: 0,
                  },
                  dateText: {
                    color: colors.greyInputText,
                    fontWeight: 'bold',
                  },
                }}
                onDateChange={(date) => { this.setState({ date }); }}
              />
            </View>
            <TextInput
              style={styles.regularInput}
              placeholder="Qual o nome do evento ?"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={colors.whiteTitles}
            />
            <TextInput
              style={styles.regularInput}
              placeholder="Onde irá ocorrer ?"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={colors.whiteTitles}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                Criar Evento
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.linkText}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
    );
  }
}

export default NewEvent;
