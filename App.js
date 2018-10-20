import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { ButtonGroup } from 'react-native-elements'; // 0.17.0
import '@expo/vector-icons'; // 5.2.0
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  state = {
    index: 0,
  };

  updateIndex = index => {
    this.setState({ index });
  };

  render() {
    return (
      <View style={{ position: 'absolute', bottom: 50, width: "100%" }}>
        <ButtonGroup
          selectedBackgroundColor=""
          onPress={this.updateIndex}
          selectedIndex={this.state.index}
          buttons={['Data Points', 'Call Help', 'Heatmap']}
          containerStyle={{ height: 40, width: "auto" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: '',
    justifyContent: '',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ec',
  },
});
