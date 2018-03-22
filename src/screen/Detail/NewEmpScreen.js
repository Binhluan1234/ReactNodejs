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
    title: 'New Employee',
  });

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      group: '',
      id: '',
      mail: '',
      age: '',
      message: ''
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

  onPressAdd() {
    let messageId = ['ID','Age','Group'];
    var errId = null;
    let id = Number(this.state.id);
    let age = Number(this.state.age);
    let group = Number(this.state.group);
    if( !errId && this.state.age && !Number.isInteger(age)) {
      errId = 1;
    }
    if( !errId && this.state.group && !Number.isInteger(group)) {
      errId = 2;
    }
    if( !errId && (this.state.id && !Number.isInteger(id)) || !this.state.id ) {
      errId = 0;
    }
    if(errId !== null) {
      this.setState({
        message: messageId[errId]+": please input number only."
      })
      return;
    }
    this.setState({
      message: ""
    })
    var emp = {
      name: this.state.name,
      age: this.state.age,
      mail: this.state.mail,
      id: this.state.id,
      group: this.state.group
    }
    this.props.addEmp(emp);
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.message}> {this.state.message === '' ? this.props.error: this.state.message }</Text>
        </View>
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
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btAdd}
            onPress={this.onPressAdd.bind(this)}>
            <Text>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.status,
    error: state.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addEmp: (emp) => dispatch(action.addEmp(emp))
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
  },
  btAdd: {
    flex: 1,
    margin: 2,
    backgroundColor: '#41c1f4',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    padding: 6,
    flex: 1,
    // backgroundColor: '#41f4d9'
  },
})