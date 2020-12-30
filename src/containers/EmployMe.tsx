import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {getUsersRequest} from '../actions/users';

interface Props {
  getUsersRequest: Function;
  deleteUserRequest: Function;
  createUserRequest: Function;
  userError: Function;
}

class EmployMe extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.getUsersRequest();
  }
  render() {
    return (
      <SafeAreaView>
        <Text>EmployMe</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, {getUsersRequest})(EmployMe);
