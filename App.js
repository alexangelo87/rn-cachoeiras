import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Card} from './components/card';
import {cachoeiras} from './data/data';

const App = () => {
  return (
    <SafeAreaView style={styles.content}>
      <StatusBar backgroundColor="#303F9F" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.textHeader}>CACHOEIRAS</Text>
      </View>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={cachoeiras}
        renderItem={({item}) => <Card data={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FAFAFA',
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: '#3F51B5',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    marginBottom: 5,
    zIndex: 999,
  },
  textHeader: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
