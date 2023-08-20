import { StyleSheet, Text, View ,FlatList ,TouchableOpacity } from 'react-native';
import CardList from './components/CardList';

export default function App() {
  return (
    <View style={styles.container}>
      <CardList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 80
  },
});
