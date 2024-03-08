import ExpensesOutput from "../components/Expenses/ExpensesOutput"
import { View, Text } from "react-native"

const AllExpenses = () => {
  return (
    <View>
        <ExpensesOutput 
            expensesPeriod='Total'
        />
    </View>
  )
}

export default AllExpenses