import { View, StyleSheet } from "react-native"
import { useLayoutEffect, useContext } from "react"
import IconButton from "../components/UI/IconButton"
import Button from "../components/UI/Button"
import { ExpenseContext } from "../context/expenses"

const ManageExpenses = ({ route, navigation }) => {

    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId
    const { deleteExpense, addExpense, updateExpense } = useContext(ExpenseContext)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    })

    const deleteExpenseHandler = () => {
        deleteExpense(editedExpenseId)
        navigation.goBack()
    }

    const cancelHandler = () => {
        navigation.goBack()
    }

    const confirmHandler = () => {
        if (isEditing) {
            updateExpense(
            editedExpenseId,
            {
                description: 'Test!!!',
                amount: 29.99,
                date: new Date('2024-03-09')
            })
        } else {
            addExpense({
                description: 'Test',
                amount: 19.99,
                date: new Date('2024-03-08')
            })
        }
        navigation.goBack()
    }

  return (
    <View style={styles.container}>
        <View style={styles.buttons}>
            <Button style={styles.button} onPress={cancelHandler}>Cancel</Button>
            <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
        </View>
        {isEditing && (
            <View style={styles.deleteContainer}>
                <IconButton icon='trash' size={30} onPress={deleteExpenseHandler}/>
            </View>
        )}
    </View>
  )
}

export default ManageExpenses

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    deleteContainer: {
        marginTop: 15,
        paddingTop: 10,
        alignItems: 'center'
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