import React, {Component} from 'react';
import {StyleSheet, FlatList, SafeAreaView, StatusBar} from 'react-native';
import {Card} from '../components/card';
import {cachoeiras} from '../data/data';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'CACHOEIRAS',
  };

  render() {
    return (
      <SafeAreaView style={styles.content}>
        <StatusBar backgroundColor="#1976D2" barStyle="light-content" />
        {/* <Header titulo={'cachoeiras'} /> */}
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={cachoeiras}
          renderItem={({item}) => (
            <Card data={item} navigation={this.props.navigation} />
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FAFAFA',
    flex: 1,
  },
});
