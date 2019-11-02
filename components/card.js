import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export const Card = props => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{
          uri: props.data.imagem,
        }}
        style={styles.cardImage}
      />
      {console.log(props)}
      <Text style={styles.textCard}>{props.data.nome}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textCard: {
    fontSize: 16,
    padding: 10,
  },
  card: {
    marginTop: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    zIndex: 998,
  },
  cardImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
});
