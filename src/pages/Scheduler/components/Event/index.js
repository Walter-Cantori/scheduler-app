import React, { Component } from 'react';
import {
  View, Text, PanResponder, Animated,
} from 'react-native';

import styles from './styles';
import Share from '../Share';
import Delete from '../Delete';

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showShare: false,
      showDelete: false,
      offset: new Animated.ValueXY({ x: 0, y: 0 }),
    };
    this._panResponder = PanResponder.create({
      onPanResponderTerminationRequest: () => false,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: Animated.event([null, {
        dx: this.state.offset.x,
      }]),

      onPanResponderRelease: () => {
        if (this.state.offset.x._value < -100) {
          if (!this.state.showShare) {
            this.setState({
              showShare: false,
              showDelete: true,
            });
          } else {
            this.setState({
              showShare: false,
              showDelete: false,
            });
          }
        }
        if (this.state.offset.x._value > 100) {
          if (!this.state.showDelete) {
            this.setState({
              showShare: true,
              showDelete: false,
            });
          } else {
            this.setState({
              showShare: false,
              showDelete: false,
            });
          }
        }
        Animated.spring(this.state.offset.x, {
          toValue: 0,
          bounciness: 10,
        }).start();
      },

      onPanResponderTerminate: () => {
        Animated.spring(this.state.offset.x, {
          toValue: 0,
          bounciness: 10,
        }).start();
      },
    });
  }

  render() {
    const { data: { title, location, time } } = this.props;
    const { showShare, showDelete, offset } = this.state;
    return (
      <View style={styles.outterContainer}>
        {showShare && <Share />}
        <Animated.View
          {...this._panResponder.panHandlers}
          style={[
            styles.container,
            showDelete && styles.delete,
            {
              transform: [
                ...offset.getTranslateTransform(),
              ],
            },
          ]}
        >
          <View>
            <Text style={styles.title}>
              {title}
            </Text>
            <Text style={styles.location}>
              {location}
            </Text>
          </View>
          <View>
            <Text style={styles.time}>
              {time}
            </Text>
          </View>
        </Animated.View>
        { showDelete && <Delete />}
      </View>
    );
  }
}

export default Event;
