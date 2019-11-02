import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    let nome = navigation.getParam('nome');
    return (
      <View>
        <Text>{nome}</Text>
      </View>
    );
  }
}
