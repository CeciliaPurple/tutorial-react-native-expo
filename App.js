import {View, Text, StyleSheet} from "react-native"
import Header from "./src/components/Header"
import Card from "./src/components/Card"
import Footer from "./src/components/Footer"
import Button from "./src/components/Button"

export default function App() {
  return(
      <View style={styles.container}>
        <Header/>

        <View style={styles.content}>
          <Card/>
          <Card/>

          <Button/>
        </View>
        <Footer/>
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