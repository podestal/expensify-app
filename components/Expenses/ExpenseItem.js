import { Pressable,View, Text, StyleSheet } from "react-native"
import { getFormattedDate } from "../../utils/date"
import { useNavigation } from "@react-navigation/native"

const ExpenseItem = ({ expense }) => {

    const navigation = useNavigation()
    

    const expensePressHandler = () => {
        navigation.navigate('ManageExpense', {
            expenseId: expense.id,
            amount: expense.amount,
            date: getFormattedDate(expense.date),
            description: expense.description

        })
    }

  return (
    <Pressable onPress={expensePressHandler} style={ ({pressed}) => pressed && styles.pressed}>
        <View style={styles.container}>  
            <View>  
                <Text style={styles.description}>{expense.description}</Text>
                <Text>On: {getFormattedDate(expense.date)}</Text>
            </View>
            <View>
                <Text style={styles.amount}>{(expense.amount.toFixed(2))}</Text>
            </View>
        </View>
    </Pressable>
  )
}

export default ExpenseItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 25,
        borderBottomColor: '#333',
        borderBottomWidth: 1,
        paddingBottom: 24,
    },
    description: {
        fontSize: 18,
        marginVertical: 10,
    },
    amount: {
        fontWeight: 'bold'
    },
    pressed: {
        opacity: 0.75,
    }
})