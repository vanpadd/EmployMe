import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {Item} from '../actions/users';

const renderItem = (item: Item, onPress: Function) => {
  return (
    <View
      style={{padding: 10, borderBottomColor: 'grey', borderBottomWidth: 1}}>
      <TouchableOpacity
        onPress={() => {
          onPress(item.id);
        }}>
        <Text style={{fontSize: 18}}>
          {item.firstName} {item.lastName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const EmployeeList = ({items, onPress}: {items: Item[]; onPress: Function}) => {
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
      renderItem={({item}) => renderItem(item, onPress)}
    />
  );
};

export default EmployeeList;
