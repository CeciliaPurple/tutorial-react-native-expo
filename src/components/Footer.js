import {View, Text, StyleSheet} from "react-native"

export default function Footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Maria Cecília</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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