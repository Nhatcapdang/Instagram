import React from 'react';
import {FlatList} from 'react-native';
import Story from '../Story';
import styles from './styles';

const data = [
  {
    id: '1',
    imageUri:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    name: 'Dang',
  },
  {
    id: '2',
    imageUri:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    name: 'Nhat',
  },
  {
    id: '3',
    imageUri:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    name: 'Cap',
  },
  {
    id: '4',
    imageUri:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    name: 'Phuong',
  },
  {
    id: '5',
    imageUri:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    name: 'Cam',
  },
  {
    id: '6',
    imageUri:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    name: 'Pham',
  },
  {
    id: '7',
    imageUri:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    name: 'Ngoc',
  },
];
export default function Stories() {
  //   const e = data.map((item, index) => {
  //     return <Story imageUri={item.imageUri} name={item.name} key={index} />;
  //   });
  return (
    <FlatList
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={({id}, index: any) => index}
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
}
