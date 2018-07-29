import React from 'react';
import {
  Modal, Text, View, TextInput, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../../../../styles';
import styles from './styles';

const NewEvent = ({ visible, closeModal }) => (
  <Modal
    visible={visible}
    animationType="fade"
    onRequestClose={closeModal}
    transparent={true}
  >
    <View style={styles.outterContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>
          Criar Evento
        </Text>
        <View style={styles.inputContainer}>
          <Icon style={styles.Icon} size={14} color={colors.greyInputText} name="phone-classic" />
          <TextInput
            style={styles.input}
            placeholder="Seu número de telefone"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={colors.whiteTitles}
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

export default NewEvent;
