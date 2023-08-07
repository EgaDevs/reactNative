import { useEffect, useState } from "react";
import { View, Text, FlatList, Image, Pressable, TouchableOpacity, TextInput} from "react-native";
import { styles } from './ListStyle';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { getAllUsers, deleteUser } from "../../store/users/userApi";
import UserAdd from "../../components/userAdd";

const ListScreen = ({navigation}) => {
    const dispatch = useDispatch()   
    const userList = useSelector(state => state.userSlice.userList)
    const [users, setUsers] = useState([]); 

    async function getProducts() {
        const { data }= await axios.get("https://reqres.in/api/users");
        dispatch(getAllUsers(data.data))
        setUsers(data.data)
    }

    function searcher(newValue) {
        setUsers(
            userList.filter((item) =>
              item.first_name.toUpperCase().includes(newValue.toUpperCase())
            )
        );
    }

    useEffect(() => {
        getProducts();
        
    }, [])

    return (
        <View style = {{alignItems: 'center'}}>
            <Text style = {{textAlign: 'center'}}>Hello, it's ListScreen!</Text>
            <TextInput placeholder="Search" style = {styles.input} onChangeText={(value) => searcher(value)}/>
            <UserAdd setUsers={setUsers} users={users}/>
            <FlatList data={users} renderItem={({item}) =>
            <TouchableOpacity onPress={() => navigation.navigate('user', item )}> 
                <View style={styles.card}>
                    <Text>{item.first_name}</Text>
                    <View style={styles.img_block}>
                    <Image style={styles.img} source={item.avatar}/>
                    </View>
                    <Pressable onPress={() => {
                        dispatch(deleteUser(item.id))
                        setUsers(users.filter(el => item.id !== el.id))
                        }} style={styles.btn}>
                        <Text style={styles.text}>Delete</Text>
                    </Pressable>
                </View> 
            </TouchableOpacity>
            }
        />
        </View>
    )
}

export default ListScreen;