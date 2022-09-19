import { View, Text, FlatList, StyleSheet } from "react-native";
import FirstScreen from "./FirstScreen";



export default function HistoryScreen({route}) {

    const { data } = route.params;
    const { sign } = route.params;

    return (
      <View style = {{flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{marginTop: 30, color: 'blue', fontSize: 15}}>History</Text>
        <FlatList style={styles.list}
            data={data}
            renderItem={({ item }) =>
                <Text>{item.key1} {sign} {item.key2} = {item.key3}</Text>
            }
        />
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
    input: {
      height: 40,
      width: 100,
      margin: 7,
      borderWidth: 1,
      padding: 5,
    },
    buttons: {
      flexDirection: 'row',
    }
  });
  