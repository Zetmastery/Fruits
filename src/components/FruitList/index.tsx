import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Layout from '../Layout';

const FruitList = () => {
  const fruits = [
    {
      name: 'Apple',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1130px-Red_Apple.jpg',
      alt: 'apple image',
    },
    {
      name: 'Banana',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/2324px-Banana-Single.jpg',
      alt: 'banana image',
    },
    {
      name: 'Orange',
      url: 'https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=',
      alt: 'orange image',
    },
    {
      name: 'Strawberry',
      url: 'https://t3.ftcdn.net/jpg/01/90/27/96/360_F_190279606_Pcge6K49YBMPiI26EEjDKxo8eVbrqYh6.jpg',
      alt: 'strawberry image',
    },
    {
      name: 'Watermelon',
      url: 'https://www.watermelon.org/wp-content/uploads/2020/07/Seeded-Wedge-scaled.jpg',
      alt: 'watermelon image',
    },
  ];

  return (
    <Layout>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Fruit List</Text>
        {fruits.map((fruit, index) => (
          <View style={styles.align} key={index}>
            <Text style={styles.text}>{fruit.name}</Text>
            <Image
              style={styles.image}
              source={{uri: fruit.url}}
              alt={fruit.alt}
            />
          </View>
        ))}
      </ScrollView>
    </Layout>
  );
};

export default FruitList;
