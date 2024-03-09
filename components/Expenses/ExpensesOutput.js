import { View, StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"


const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary 
        expenses={expenses}
        periodName={expensesPeriod}
      />
      <ExpensesList 
        expenses={expenses}
      />
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ecf0f1',
  }
})