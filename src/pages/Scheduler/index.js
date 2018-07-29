import React, { Component } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { View, FlatList, Text } from 'react-native';
import { colors } from '../../styles';

import styles from './styles';
import Header from './components/Header';
import Event from './components/Event';

const events = [
  {
    id: 0,
    title: 'event1',
    location: 'location1',
    date: '20/07/2018',
    time: '19:00',
  },
  {
    id: 1,
    title: 'event2',
    location: 'location2',
    date: '20/07/2018',
    time: '19:00',
  },
  {
    id: 2,
    title: 'event3',
    location: 'location3',
    date: '20/07/2018',
    time: '19:00',
  },
  {
    id: 3,
    title: 'event4',
    location: 'location4',
    date: '20/07/2018',
    time: '19:00',
  },
  {
    id: 4,
    title: 'event4',
    location: 'location4',
    date: '20/07/2018',
    time: '19:00',
  },
  {
    id: 5,
    title: 'event4',
    location: 'location4',
    date: '20/07/2018',
    time: '19:00',
  },
];

LocaleConfig.locales['br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
};

LocaleConfig.defaultLocale = 'br';

class Scheduler extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Header openMyAccount={() => navigation.navigate('MyAccount')} openModal={this.openModal} />,
    headerLeft: null,
  });

  state = {
    selectedDate: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.calendar}>
          <Calendar
            onDayPress={day => this.setState({ selectedDate: day.dateString })}
            markedDates={{
              [this.state.selectedDate]: {
                selected: true,
                marked: true,
                selectedColor: colors.green,
              },
            }}
            theme={{
              calendarBackground: colors.purpleBack,
              textSectionTitleColor: colors.whiteTitles,
              todayTextColor: colors.blue,
              dayTextColor: colors.whiteTitles,
              textDisabledColor: colors.blue,
              dotColor: colors.green,
              arrowColor: colors.whiteTitles,
              monthTextColor: colors.whiteTitles,
              textMonthFontWeight: 'bold',
              textDayFontSize: 14,
              textMonthFontSize: 18,
              textDayHeaderFontSize: 14,
            }}
          />
        </View>
        <View style={styles.eventList}>
          <FlatList
            data={events}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Event data={item} />}
          />
        </View>
      </View>
    );
  }
}

export default Scheduler;
