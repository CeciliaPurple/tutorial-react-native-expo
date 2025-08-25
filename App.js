import { View, Text, StyleSheet } from "react-native"
import Header from "./src/components/Header"
import Card from "./src/components/Card"
import Footer from "./src/components/Footer"
import Button from "./src/components/Button"

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>

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
  content: {
    flex: 7,
    width: '100%',
    backgroundColor: "#92f0ffff",
    alignItems: 'center',
    padding: 20,
    gap: 20
  }
})