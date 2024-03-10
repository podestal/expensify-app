import { View, Text, TextInput, StyleSheet } from "react-native"

const Input = ({ label, textInputConfig, style }) => {

    const inputStyles = [styles.input]

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

  return (
    <View style={[styles.inputContanier, style]}>
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
        // flex: 1,
    },
    label: {
        fontSize: 12,
        marginBottom: 4,
    },
    input: {
        padding: 6,
        fontSize: 18,
        backgroundColor: '#bdc3c7',
        borderRadius: 10,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
})