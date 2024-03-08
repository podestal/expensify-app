import { Pressable,View, Text, StyleSheet } from "react-native"

const ExpenseItem = ({ expenses}) => {

  return (
    <Pressable>
        <View style={styles.container}>  
            <View>  
                <Text style={styles.description}>{expenses.description}</Text>
                <Text>On: {expenses.date.toString()}</Text>
            </View>
            <View>
                <Text style={styles.amount}>{expenses.amount}</Text>
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
    },
    description: {
        fontSize: 18,
        marginVertical: 10,
    },
    amount: {
        fontWeight: 'bold'
    }
})