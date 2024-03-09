import { View, Text } from "react-native"
import { useLayoutEffect } from "react"

const ManageExpenses = ({ route, navigation }) => {

    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    })

  return (
    <View>
        <Text>Manage Expenses</Text>
    </View>
  )
}

export default ManageExpenses