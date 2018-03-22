import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'

import * as action from '../../action/action'

class NewEmpScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Employee Information',
  });

  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      name: '',
      group: '',
      id: '',
      mail: '',
      age: '',
    }
  }

  onChangeName(text) {
    this.setState({
      name: text,
    })
  }

  onChangeAge(text) {
    this.setState({
      age: text,
    })
  }

  onChangeMail(text) {
    this.setState({
      mail: text,
    })
  }

  onChangeId(text) {
    this.setState({
      id: text,
    })
  }

  onChangeGroup(text) {
    this.setState({
      group: text,
    })
  }

  onPressSave() {
    var emp = {
      _id: this.state._id,
      name: this.state.name,
      age: this.state.age,
      mail: this.state.mail,
      id: this.state.id,
      group: this.state.group
    }
    this.props.saveEmp(emp);
    // alert('add' + JSON.stringify(emp));
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    let info = params.info;
    alert("EDIT: "+JSON.stringify(info));
    this.setState({
      _id: info._id,
      name: info.name,
      group: ""+info.group,
      id: ""+info.id,
      mail: info.mail,
      age: ""+info.age,
    })
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.title}> Name</Text>
          <TextInput style={styles.input}
            value={this.state.name}
            placeholder="Name"
            onChangeText={this.onChangeName.bind(this)}
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}> Age</Text>
          <TextInput style={styles.input}
            value={this.state.age}
            onChangeText={this.onChangeAge.bind(this)}
            underlineColorAndroid='transparent'
            keyboardType='numeric'
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}> Mail</Text>
          <TextInput style={styles.input}
            value={this.state.mail}
            onChangeText={this.onChangeMail.bind(this)}
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}> Group</Text>
          <TextInput style={styles.input}
            value={this.state.group}
            onChangeText={this.onChangeGroup.bind(this)}
            underlineColorAndroid='transparent'
            keyboardType='numeric'
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}> ID</Text>
          <TextInput style={styles.input}
            value={this.state.id}
            placeholder="ID (Number)"
            onChangeText={this.onChangeId.bind(this)}
            underlineColorAndroid='transparent'
            keyboardType='numeric'
            editable={false}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btSave}
            onPress={this.onPressSave.bind(this)}>
            <Text>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveEmp: (emp) => dispatch(action.updateEmp(emp))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEmpScreen);

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  row: {
    // flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#41e2f4',
    height: 40
  },
  title: {
    padding: 6,
    flex: 1,
    backgroundColor: '#41f4d9'
  },
  input: {
    flex: 4,
    // borderLeftWidth: 1,
    // borderColor: 'green'
  },
  btSave: {
    flex: 1,
    margin: 2,
    backgroundColor: '#41c1f4',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  }
})