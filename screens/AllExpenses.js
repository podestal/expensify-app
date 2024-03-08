import ExpensesOutput from "../components/Expenses/ExpensesOutput"
import { View, Text } from "react-native"

const AllExpenses = () => {
  return (
    <ExpensesOutput 
        expensesPeriod='Total'
    />
  )
}

export default AllExpenses