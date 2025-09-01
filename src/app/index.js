import { View, Text, StyleSheet } from "react-native"
import Header from "../components/Header"
import Card from "../components/Card"
import Footer from "../components/Footer"
import Button from "../components/Button"
import { Link } from "expo-router"

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.nav}>
        <Link href={'contact'} style={styles.button}><Text>Contato</Text></Link>
        <Link href={'about'} style={styles.button}><Text>Sobre</Text></Link>
        <Link href={'profile'} style={styles.button}><Text>Perfil</Text></Link>
      </View>
      <View style={styles.content}>
        <Card 
        title="Barbie e o Castelo de Diamante" 
        text="Liana e Alexa saem da sua cabana humilde para vender flores na vila e acabam conhecendo Melody, a guardiã do Castelo de Diamante." 
        image= "https://m.media-amazon.com/images/S/pv-target-images/d75b17217d97c7301d85122dda1fd58cc629b51b415e41d67bad8d208563c8a2.jpg"
        />

        <Card 
        title="Monster High: Scaris - A Cidade sem Luz" 
        text="Clawdeen Wolf tem a chance de vencer uma competição e se tornar aprendiz da famosa designer Moanatella Ghostier." 
        image="https://m.media-amazon.com/images/S/pv-target-images/6ba8333260b1058caf77d0f9426cb47ac7cceabf8d1bf99895c35be39a933e5d.jpg"
        />
        <Button />
      </View>

      <Footer />
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
  nav: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#95a9ffff',
    width: '100%'
  },
  button: {
    backgroundColor: '#f4f3f0ff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  content: {
    flex: 7,
    width: '100%',
    backgroundColor: "#92f0ffff",
    alignItems: 'center',
    padding: 20,
    gap: 20
  }
})