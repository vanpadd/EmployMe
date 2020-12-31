import React from 'react';
import {FlatList, Text, View} from 'react-native';

const renderItem = ({item}) => {
  return (
    <View
      style={{padding: 10, borderBottomColor: 'grey', borderBottomWidth: 1}}>
      <Text style={{fontSize: 18}}>
        {item.firstName} {item.lastName}
      </Text>
    </View>
  );
};

const EmployeeList = ({items}) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default EmployeeList;
