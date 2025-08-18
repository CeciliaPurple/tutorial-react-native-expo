import {View, Text, StyleSheet} from "react-native"

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.logo}>Logo</Text>
        <View style={styles.menu}></View>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffbb00ff'
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: "#e05050ff"
  }
})