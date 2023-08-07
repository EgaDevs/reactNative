import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './AuthStyle';
import { setLogin } from '../../store/login/loginStore';
import { useDispatch, useSelector } from 'react-redux';

const AuthScreen = ( { navigation } ) => {
    const [auth, setAuth] = useState({email: '', password: ''})
    const [err, setErr] = useState('')
    const dispatch = useDispatch()
    const login = useSelector(state => state.loginSlice.login)

    async function Login() {
      try {
        const resp = await axios.post('https://reqres.in/api/login', {'email': auth.email, 'password': auth.password})
        setErr('')
        dispatch(setLogin(auth))
        navigation.navigate('list')
      }catch(e) {
        setErr('Login Failed');
      }
    }

    useEffect(() => {
      setAuth({...login})
    }, [])

    return (
        <View style ={styles.form}>
            <Text style = {{textAlign: 'center'}}>Registration Form</Text>
            <Text>{err}</Text>
            <TextInput style={styles.input} value={auth.email} onChangeText={(value => setAuth({...auth, email: value}))} placeholder='Login' />
            <TextInput style={styles.input} value={auth.password} onChangeText={(value => setAuth({...auth, password: value}))}password placeholder='Password' />
            <Button
              title="Login"
              onPress={Login}
            />
        </View>
    )
}

export default AuthScreen;