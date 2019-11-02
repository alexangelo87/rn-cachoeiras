import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>{props.titulo.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    height: 50,
    backgroundColor: '#1E88E5',
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
});
