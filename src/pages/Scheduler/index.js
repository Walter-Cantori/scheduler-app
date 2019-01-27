import React, { Component } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import {
  View,
  FlatList,
  Animated,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
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
    title: 'event3',
    location: 'location3',
    date: '20/07/2018',
    time: '19:00',
  },
  {
    id: 4,
    title: 'event3',
    location: 'location3',
    date: '20/07/2018',
    time: '19:00',
  },
  // {
  //   id: 5,
  //   title: 'event3',
  //   location: 'location3',
  //   date: '20/07/2018',
  //   time: '19:00',
  // },
  // {
  //   id: 6,
  //   title: 'event3',
  //   location: 'location3',
  //   date: '20/07/2018',
  //   time: '19:00',
  // },
];

LocaleConfig.locales.br = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
};
LocaleConfig.defaultLocale = 'br';

const dayOptions = { weekday: 'long', month: 'long', day: 'numeric' };

class Scheduler extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Header openMyAccount={() => navigation.navigate('MyAccount')} openModal={this.openModal} />,
    headerLeft: null,
  });

  constructor(props) {
    super(props);

    this.state = {
      selectedDate: null,
      dayText: null,
      scrollOffset: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const selectedDate = moment().format('YYYY-MM-DD');
    const dayText = this.formatDayText(selectedDate);
    this.setState({
      selectedDate,
      dayText,
    });
  }

  setDates = (date) => {
    const dayText = this.formatDayText(date.dateString);

    this.setState({
      selectedDate: date.dateString,
      dayText,
    });
  }

  changeDates = (operator) => {
    const { selectedDate: date } = this.state;
    let newDate;
    switch (operator) {
      case '+':
        newDate = moment(date, 'YYYY-MM-DD').add(1, 'd').format('YYYY-MM-DD');
        break;
      case '-':
        newDate = moment(date, 'YYYY-MM-DD').subtract(1, 'd').format('YYYY-MM-DD');
        break;
      default:
        break;
    }

    const dayText = this.formatDayText(newDate);

    this.setState({
      selectedDate: newDate,
      dayText,
    });
  }

  formatDayText = (date) => {
    const auxDate = new Date(`${date}`).toLocaleDateString('pt-BR', dayOptions).split(' ');
    auxDate[0] = auxDate[0][0].toUpperCase() + auxDate[0].slice(1);
    auxDate[auxDate.length - 1] = auxDate[auxDate.length - 1][0]
      .toUpperCase() + auxDate[auxDate.length - 1].slice(1);
    return auxDate.join(' ');
  }

  render() {
    const { scrollOffset, dayText, selectedDate } = this.state;
    return (
      <View style={styles.container}>
        <Animated.View style={[
          styles.dayCalendar,
          {
            height: scrollOffset.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 50],
              extrapolate: 'clamp',
            }),
            opacity: scrollOffset.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          },
        ]}
        >
          <TouchableOpacity onPress={() => this.changeDates('-')}>
            <Icon style={styles.Icon} size={24} color="#DADADA" name="arrow-left-bold" />
          </TouchableOpacity>
          <Text style={styles.title}>
            { dayText }
          </Text>
          <TouchableOpacity onPress={() => this.changeDates('+')}>
            <Icon style={styles.Icon} size={24} color="#DADADA" name="arrow-right-bold" />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={[
            styles.calendar,
            {
              height: scrollOffset.interpolate({
                inputRange: [0, 100],
                outputRange: [300, 0],
                extrapolate: 'clamp',
              }),
              opacity: scrollOffset.interpolate({
                inputRange: [0, 50, 100],
                outputRange: [1, 0.5, 0],
                extrapolate: 'clamp',
              }),
              transform: [
                {
                  translateY: scrollOffset.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -800],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        >
          <Calendar
            onDayPress={day => this.setDates(day)}
            markedDates={{
              [selectedDate]: {
                selected: true, marked: true, selectedColor: colors.blue,
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
              textDayFontSize: 12,
              textMonthFontSize: 18,
              textDayHeaderFontSize: 14,
            }}
          />
        </Animated.View>

        <Animated.View style={styles.eventList}>
          {Platform.OS === 'ios'
            ? (
              <FlatList
                scrollEventThrottle={16}
                onScroll={Animated.event([{
                  nativeEvent: {
                    contentOffset: { y: scrollOffset },
                  },
                }])}
                data={events}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <Event data={item} />}
              />
            )
            : (
              <FlatList
                scrollEventThrottle={16}
                data={events}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <Event data={item} />}
              />
            )
          }
        </Animated.View>
      </View>
    );
  }
}

export default Scheduler;
