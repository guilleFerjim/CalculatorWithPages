import { NavigationContainer } from'@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack';
import FirstScreen from './screens/FirstScreen';
import HistoryScreen from './screens/HistoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={FirstScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
    </Stack.Navigator>
  </NavigationContainer>  
  );
}

