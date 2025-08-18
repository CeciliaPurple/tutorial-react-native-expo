import {View, Text, StyleSheet} from "react-native"

export default function Card() {
    return(
        <View style={styles.card}>
            <View style={styles.image}></View>
            <View style={styles.textBox}>
                <Text style={styles.title}>Título</Text>
                <Text style={styles.text}>loremrgfhgiahriugjsfhfhgeusgfudguyfhdsufhdsuyduyfhdsiufhd</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
    height: 150,
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
    width: 100,
    height: 100
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