import {View, Text, StyleSheet} from "react-native"

export default function Button() {
  return (
     <View style={styles.containerBotao}>
        <Text style={styles.textBotao}>Ver Mais</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
})