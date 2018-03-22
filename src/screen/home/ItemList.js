import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'


const Item = (Props) => (
  <View style={styles2.item}>
    <TouchableOpacity style={styles2.text}
      onPress={() => Props.navigation.navigate('EditEmp', {info: Props.itemProps})}>
      <Text >{Props.itemProps.id} - {Props.itemProps.name}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles2.btDel}
      onPress={() => Props.removeEmp(Props.itemProps)}>
      <Text>Del</Text>
    </TouchableOpacity>
  </View> 
);

export default Item;


const styles2 = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#00bfff',
  },

  text: {
    flex: 5,
  },

  btDel: {
    flex: 1,
    margin: 2,
    backgroundColor: 'red',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});