import React, { Component } from 'react';
import {
  View, Text, ScrollView,
} from 'react-native';

import styles from './styles';
import Share from '../Share';
import Delete from '../Delete';

class Event extends Component {
  state = {
    showShare: false,
    showDelete: false,
    scrollStart: 0,
  }

  scrollEnd = (e) => {
    const { x } = e.nativeEvent.contentOffset;
    const { scrollStart, showDelete, showShare } = this.state;

    if (x === scrollStart && x === 0) {
      this.setState({
        showDelete: false,
        showShare: true,
      });
    }

    if (x > scrollStart && !showShare) {
      this.setState({
        showDelete: true,
      });
    }

    if (x > scrollStart && showShare) {
      this.setState({
        showDelete: false,
        showShare: false,
      });
    }
  }

  render() {
    const { data: { title, location, time } } = this.props;
    const { showShare, showDelete } = this.state;
    return (
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.outterContainer}
        onScrollBeginDrag={e => this.setState({ scrollStart: e.nativeEvent.contentOffset.x })}
        onScrollEndDrag={this.scrollEnd}
      >
        {showShare && <Share /> }
        <View style={[styles.container, showDelete && styles.showDelete]}>
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

        </View>
        {showDelete && <Delete /> }
    </ScrollView>
    );
  }
}

export default Event;
