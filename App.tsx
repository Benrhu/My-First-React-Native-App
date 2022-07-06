import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './src/components/helloworld';
import Jobs from './src/components/jobs';
import JobList from './src/components/JobOffer';

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorld></HelloWorld>
      <JobList></JobList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1:{
    fontSize: 30,
    color: 'black',
  }
});
