import axios from 'axios'
import { useDispatch } from 'react-redux';
import { getAllUsers } from "../store/users/userApi";

const dispatch = useDispatch()            
export async function getProducts(setUsers) {
    const { data }= await axios.get("https://reqres.in/api/users");
    console.log(data.data);
    dispatch(getAllUsers(data.data))
    setUsers(data.data)
}