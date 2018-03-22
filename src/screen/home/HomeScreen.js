import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ToolbarAndroid,
  Button
} from 'react-native'
import { connect } from 'react-redux'
import ListEmp from './ListEmp'
import * as action from '../../action/action'

class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Employees',
    headerRight: <Button title="New"
      onPress={() => navigation.navigate('NewEmp', { user: 'Luannb' })}
    />,
  });

  async componentWillMount() {
    this.props.getData();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <ToolbarAndroid
          title='dribbble'
          titleColor='#FFFFFF'
        />
        <ListEmp navigation={this.props.navigation} 
          dataList={this.props.data}
          removeEmp={this.props.removeEmp}
        />
      </View>
    )
  }
}

const stylesHome = StyleSheet.create({
  body: {
    flex: 1,
  }
})
const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(action.getData()),
    removeEmp: (emp) => dispatch(action.removeEmp(emp)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);