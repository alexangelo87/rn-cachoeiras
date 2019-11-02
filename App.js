import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {Card} from './components/card';
import {cachoeiras} from './data/data';

const App = () => {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>CACHOEIRAS</Text>
      </View>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={cachoeiras}
        renderItem={({item}) => <Card data={item} />}
      />
      <Card data={cachoeiras} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    backgroundColor: '#f5fcff',
  },
  header: {
    height: 50,
    backgroundColor: '#3F51B5',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: 'black',
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    zIndex: 999,
  },
  textHeader: {
    color: 'white',
    fontSize: 18,
  }
});

export default App;
