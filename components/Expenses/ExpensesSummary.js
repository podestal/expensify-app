import { Text, View, StyleSheet } from "react-native"

const ExpensesSummary = ({ expenses, periodName }) => {

  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0)
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    // borderRadius: 15,  
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#bdc3c7'
  },
  period: {
    fontSize: 16
  },
  sum: {
    fontSize: 18,
    fontWeight: 'bold',

  }
})

export default ExpensesSummary