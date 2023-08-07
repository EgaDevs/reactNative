import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { StyleSheet, Button} from "react-native";
import ListScreen from './screens/ListScreen/ListScreen';
import UserScreen from "./screens/UserScreen/UserScreen";
import AuthScreen from "./screens/AuthScreen/AuthScreen";
import { Provider } from "react-redux";
import store from "./store/store";


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='auth' component={AuthScreen} />
          <Stack.Screen name='list' component={ListScreen} 
          options={({ navigation }) => ({
            headerLeft: () => null,
            headerRight: () => (
              <Button
                title="Logout"
                onPress={() => {
                  navigation.navigate("auth");
                }}
              />
            ),
          })} />
          <Stack.Screen name='user' component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});