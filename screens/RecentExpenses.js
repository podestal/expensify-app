import { View, Text } from "react-native"
import ExpensesOutput from "../components/Expenses/ExpensesOutput"
import { ExpenseContext } from "../context/expenses"
import { useContext } from "react"
import { getDateMinusDays } from "../utils/date"


const RecentExpenses = () => {

    const expensesContext = useContext(ExpenseContext)
    const recentExpenses = expensesContext.expenses.filter( expense => {
        const today = new Date()
        const dateSevenDaysAgo = getDateMinusDays(today, 7)

        return (expense.date >= dateSevenDaysAgo && expense.date <= today)
    })

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 Days'/>
  )
}

export default RecentExpenses