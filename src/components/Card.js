import { View, Text, StyleSheet} from "react-native"
import { Image } from "expo-image"

export default function Card({title, text, image}) {

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={image}
      />

      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: "#690d9eff",
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  image: {
    backgroundColor: "#da36b6ff",
    borderRadius: 10,
    width: 150,
    height: 150,
    backgroundPosition: "center",
    backgroundSize: "co"
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  textBox: {
    flex: 2,
  },
  text: {
    color: '#fff'
  },
})