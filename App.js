import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreeen from './screens/HomeScreeen';
import StackNavigator from './StackNavigator';
export default function App() {
  return (
    <>    
     <StackNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
