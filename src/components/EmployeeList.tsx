import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Item} from '../actions/users';

const renderItem = ({item}: {item: Item}) => {
  return (
    <View
      style={{padding: 10, borderBottomColor: 'grey', borderBottomWidth: 1}}>
      <Text style={{fontSize: 18}}>
        {item.firstName} {item.lastName}
      </Text>
    </View>
  );
};

const EmployeeList = ({items}: {items: Item[]}) => {
  return (
    <FlatList
      data={items.sort((a: Item, b: Item) => {
        if (a.firstName > b.firstName) {
          return 1;
        } else if (a.firstName < b.firstName) {
          return -1;
        } else if (a.lastName > b.lastName) {
          return 1;
        } else if (a.lastName < b.lastName) {
          return -1;
        } else {
          return 0;
        }
      })}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default EmployeeList;
