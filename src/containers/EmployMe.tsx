import React from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getUsersRequest, usersState} from '../actions/users';

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

  renderItem = ({item}) => {
    return (
      <Text>
        {item.firstName} {item.lastName}
      </Text>
    );
  };

  render() {
    const {items} = this.props.users;

    return (
      <SafeAreaView>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderItem}
        />
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
