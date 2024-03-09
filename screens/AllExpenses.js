import ExpensesOutput from "../components/Expenses/ExpensesOutput"
import { View, Text } from "react-native"
import { useContext } from "react"
import { ExpenseContext } from "../context/expenses"

const AllExpenses = () => {

    const expensesContext = useContext(ExpenseContext)

  return (
    <ExpensesOutput 
        expenses={expensesContext.expenses}
        expensesPeriod='Total'
    />
  )
}

export default AllExpenses