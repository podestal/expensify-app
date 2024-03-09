import { View, StyleSheet } from "react-native"
import { useLayoutEffect } from "react"
import IconButton from "../components/UI/IconButton"
import Button from "../components/UI/Button"

const ManageExpenses = ({ route, navigation }) => {

    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    })

    const deleteExpenseHandler = () => {

    }

    const cancelHandler = () => {

    }

    const confirmHandler = () => {

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