import { View , Pressable, Text, StyleSheet} from "react-native"

const Button = ({ children, onPress, mode, style}) => {

  return (
    <View style={style}>
        <Pressable onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 10,
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
    },
    pressed: {
        opacity: 0.75,
        borderRadius: 4,
    }
})