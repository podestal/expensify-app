import { View, StyleSheet, Text, ScrollView, Alert } from "react-native"
import { useState } from "react"
import Input from "./Input"
import Button from "../UI/Button"

const ExpenseForm = ({ cancelHandler, confirmHandler, expense }) => {

    const [amount, setAmountValue] = useState(expense?.amount?.toString() || '')
    const [date, setDateValue] = useState(expense?.date || '')
    const [description, setDescriptionValue] = useState(expense?.description || '')

    const handleSubmit = () => {

        const parseAmount = parseFloat(amount)
        const amountIsValid = parseAmount > 0

        const dateValue = new Date(date)
        const dateIsValid = dateValue.toString() !== 'Invalid Date' 

        const descriptionIsValid = description.trim().length > 0

        if (!amountIsValid && !dateIsValid && !descriptionIsValid) {
            Alert.alert('Invalid Input', 'Please check your input values')
            return
        }

        confirmHandler({ amount: parseAmount, date:dateValue, description })
    }

  return (
    <ScrollView keyboardShouldPersistTaps='handled' style={style.form}>
        <Text style={style.title}>Expense</Text>
        <View style={style.rowInputContainer}>
            <Input style={style.rowInput} label='Amount' textInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: value => setAmountValue(value),
                value: amount,
            }}/>
            <Input style={style.rowInput} label='Date' textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                value: date,
                onChangeText: value => setDateValue(value),
            }}/>
        </View>
        <Input label='Description' textInputConfig={{
            multiline: true,
            value: description,
            onChangeText: value => setDescriptionValue(value)
        }}/>
        <View style={style.buttons}>
            <Button style={style.button} onPress={cancelHandler}>Cancel</Button>
            <Button style={style.button} onPress={handleSubmit}>{expense?.amount ? 'Update' : 'Add'}</Button>
        </View>
    </ScrollView>
  )
}

export default ExpenseForm

const style = StyleSheet.create({
    form: {
        marginTop: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    rowInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    }
})
