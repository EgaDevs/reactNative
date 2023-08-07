import { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './UserStyle';

const UserScreen = ({navigation, route}) => {
    const data = route.params;

    return (
        <View>
            <Text>Hello, it's UserScreen!</Text>
                <View style={styles.card}>
                    <Image style={styles.img} source={data.avatar}/>
                    <Text>{data.first_name}</Text>
                    <Text>{data.last_name}</Text>
                    <Text>{data.email}</Text>
                </View>
        </View>
    )   
}

export default UserScreen;