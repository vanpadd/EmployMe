import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';

const EmployeeForm = ({onSubmit}: {onSubmit: Function}): JSX.Element => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <View>
      <Text style={{fontSize: 18}}>First name</Text>
      <View
        style={{
          height: 50,
          borderWidth: 1,
          borderColor: 'grey',
          justifyContent: 'center',
          padding: 10,
          marginVertical: 10,
        }}>
        <TextInput
          style={{fontSize: 18}}
          value={firstName}
          placeholder="First name"
          onChangeText={(text) => setFirstName(text)}
        />
      </View>
      <Text style={{fontSize: 18}}>Last name</Text>
      <View
        style={{
          height: 50,
          borderWidth: 1,
          borderColor: 'grey',
          justifyContent: 'center',
          padding: 10,
          marginVertical: 10,
        }}>
        <TextInput
          style={{fontSize: 18}}
          value={lastName}
          placeholder="Last name"
          onChangeText={(text) => setLastName(text)}
        />
      </View>
      <View style={{paddingBottom: 20}}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: '#3b5998',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            onSubmit({firstName, lastName});
            setTimeout(() => {
              setFirstName('');
              setLastName('');
            }, 0);
          }}>
          <Text style={{fontSize: 18, color: 'white'}}>Add New Employee</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmployeeForm;
