import { View, StyleSheet, Text, Button } from "react-native"
import { useState } from "react"
import Input from "./Input"

const ExpenseForm = ({ confirmHandler, expense }) => {

    const [amount, setAmountValue] = useState(expense.amount.toString())
    const [date, setDateValue] = useState(expense.date)
    const [description, setDescriptionValue] = useState(expense.description)

    const handleSubmit = () => {
        const dateValue = new Date(date) 
        confirmHandler({ amount: parseFloat(amount), date:dateValue, description })
    }

  return (
    <View style={style.form}>
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
        <Button title="PRess" onPress={handleSubmit} />
    </View>
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
    }
})