import React, { Component } from 'react'
import {
  View,
  FlatList,
  Text,
} from 'react-native';

import ItemLists from './ItemList'

class ListEmp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  removeEmp(emp) {
    this.props.removeEmp(emp);
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.dataList}
          renderItem={({ item }) =>
            <ItemLists itemProps={item}
              removeEmp={this.removeEmp.bind(this)}
              navigation={this.props.navigation}
            />
          }
        />
      </View>
    )
  }
}

export default ListEmp;