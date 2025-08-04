import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.box3}></View>
        <View style={styles.box3}></View>
      </View>
      <Text style={styles.tituloPrim}>Título principal</Text>
      <Text style={styles.subTitulo}>Subtítulo</Text>
      <Text style={styles.text}>Este é um parágrafo</Text>
      <Text style={styles.saibaMais}>Saiba Mais</Text>
      <View style={styles.box2}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'arial',
  },
  tituloPrim: {
    fontSize: 30,
    fontWeight:'bold',
    color: '#fff',
    marginVertical: 20,
  },
  subTitulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  saibaMais: {
    color:'#6e6e6eff',
  },
  box1: {
    width: 400,
    height: 100,
    backgroundColor: 'pink',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center'
  },
  box2:{
    width: 400,
    height: 100,
    backgroundColor: 'violet',
  },
  box3:{
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
});
