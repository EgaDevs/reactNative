import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addUser } from '../store/users/userApi';

const userAdd = ({setUsers, users}) => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({first_name: '', last_name: '', email: '', avatar: '', id: 0})
    function createUser() {
      if(user.first_name && user.last_name && user.email && user.avatar) {
        const newUser = {...user, id: Date.now()}
        dispatch(addUser(newUser))
        setUsers([...users, newUser])
      }
    }
  return (
    <View style = {styles.form}>
      <Text style = {styles.title}>New User</Text>
      <TextInput style = {styles.input} onChangeText={(value) => setUser({...user, first_name: value})} placeholder='First Name' />
      <TextInput style = {styles.input} onChangeText={(value) => setUser({...user, last_name: value})} placeholder='Last Name' />
      <TextInput style = {styles.input} onChangeText={(value) => setUser({...user, email: value})} placeholder='email' />
      <TextInput style = {styles.input} onChangeText={(value) => setUser({...user, avatar: value})} placeholder='avatar' />
      <TouchableOpacity style = {styles.btn} onPress={createUser}>
        <Text>Create</Text>
      </TouchableOpacity>
    </View>
  )
}

export default userAdd;


const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    rowGap:15,
    marginVertical: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 500
  },
  input: {
    padding: 10,
    width: 250,
    color: '#000',
    borderWidth: 1,
    borderColor: '#000'
  },
  btn: {
    padding: 10,
    width: 250,
    alignItems: 'center',
    backgroundColor: 'lightblue'
  }
})