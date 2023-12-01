
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TablePage from './src/tablePage';
import AddPage from './src/addPage';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddPage"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="AddPage" component={AddPage} />
        <Stack.Screen name="TablePage" component={TablePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins',  
  },
});
