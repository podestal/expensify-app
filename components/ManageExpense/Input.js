import { View, Text, TextInput, StyleSheet } from "react-native"

const Input = ({ label, textInputConfig }) => {

    const inputStyles = [styles.input]

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

  return (
    <View style={styles.inputContanier}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={inputStyles} {...textInputConfig}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContanier: {
        marginHorizontal: 4,
        marginVertical: 16,
    },
    label: {
        fontSize: 12,
        marginBottom: 4,
    },
    input: {
        padding: 6,
        fontSize: 18,
        backgroundColor: '#bdc3c7'
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
})