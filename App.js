import React from "react"
import {View, Text, StyleSheet} from "react-native"

export default function App() {
  return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logo}>Logo</Text>
          <View style={styles.menu}></View>
        </View>

        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.image}></View>
            <View style={styles.textBox}>
              <Text style={styles.title}>Título</Text>
              <Text style={styles.text}>loremrgfhgiahriugjsfhfhgeusgfudguyfhdsufhdsuyduyfhdsiufhd</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.image}></View>
            <View style={styles.textBox}>
              <Text style={styles.title}>Título</Text>
              <Text style={styles.text}>loremrgfhgiahriugjsfhfhgeusgfudguyfhdsufhdsuyduyfhdsiufhd</Text>
            </View>
          </View>

          <View style={styles.containerBotao}>
            <Text style={styles.textBotao}>Ver Mais</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Maria Cecília</Text>
        </View>
      </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3df146ff',
    justifyContent: 'center',
    alignItems: 'center'
  },
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffbb00ff'
  },
  content: {
    flex: 7,
    width: '100%',
    backgroundColor: "#92f0ffff",
    alignItems: 'center',
    padding: 20,
    gap: 20
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: "#e05050ff"
  },
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
  containerBotao: {
    backgroundColor: "#153cebff",
    borderRadius: 10,
    width: '50%',
    height: 50,
    justifyContent: 'center',
    marginTop: 20
  },
  textBotao: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  footer: {
    flex: 1,
    width: '100%',
    backgroundColor: "#153cebff",
    justifyContent: 'center',
    alignItems: 'center'
  },
    footerText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff'
    }
})