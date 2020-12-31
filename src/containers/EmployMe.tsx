import React from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getUsersRequest, usersState} from '../actions/users';
import EmployeeList from '../components/EmployeeList';

interface Props {
  users: usersState;
  getUsersRequest: Function;
  // deleteUserRequest: Function;
  // createUserRequest: Function;
  // userError: Function;
}

class EmployMe extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.getUsersRequest();
  }

  render() {
    const {items} = this.props.users;

    return (
      <SafeAreaView style={{marginHorizontal: 10}}>
        <EmployeeList items={items} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, {getUsersRequest})(EmployMe);
