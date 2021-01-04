import React from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersState,
} from '../actions/users';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import {StoreState} from '../reducers';

interface Props {
  users: usersState;
  getUsersRequest: Function;
  deleteUserRequest: Function;
  createUserRequest: Function;
  // userError: Function;
}

class EmployMe extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.getUsersRequest();
  }

  handleOnSubmit = ({
    firstName,
    lastName,
  }: {
    firstName: string;
    lastName: string;
  }) => {
    this.props.createUserRequest({firstName, lastName});
  };

  handleOnPress = (userId: number) => {
    this.props.deleteUserRequest(userId);
  };

  render() {
    const {items, loading} = this.props.users;

    return (
      <SafeAreaView style={{marginHorizontal: 10}}>
        <EmployeeForm onSubmit={this.handleOnSubmit} />
        {loading ? (
          <ActivityIndicator style={{marginTop: 20}} size="large" />
        ) : (
          <EmployeeList items={items} onPress={this.handleOnPress} />
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
})(EmployMe);
