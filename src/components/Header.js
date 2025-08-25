import {View, Text, StyleSheet} from "react-native"
import { Image } from "expo-image"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('../../assets/img/logo2.png')}
      />
        <View>
          <FontAwesome6 name="bars" size={24} color="#fff" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    backgroundColor: "#153cebff",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  logo: {
    width: 75,
    height: 75
  }
})