import { View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"

const EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19')
  },
  {
    id: 'e2',
    description: 'A pair of pants',
    amount: 43.99,
    date: new Date('2021-11-19')
  },
  {
    id: 'e3',
    description: 'Bananas',
    amount: 4.99,
    date: new Date('2021-02-19')
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 9.99,
    date: new Date('2021-05-19')
  },
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary 
        expenses={EXPENSES}
        periodName={expensesPeriod}
      />
      <ExpensesList 
        expenses={EXPENSES}
      />
    </View>
  )
}

export default ExpensesOutput