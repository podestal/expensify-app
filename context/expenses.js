import { createContext, useReducer } from "react";

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
    {
      id: 'e5',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2021-12-19')
    },
    {
      id: 'e6',
      description: 'A pair of pants',
      amount: 43.99,
      date: new Date('2021-11-19')
    },
    {
      id: 'e7',
      description: 'Bananas',
      amount: 4.99,
      date: new Date('2021-02-19')
    },
    {
      id: 'e8',
      description: 'A book',
      amount: 9.99,
      date: new Date('2021-05-19')
    },
  ]

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, { description, amount, date }) => {},
})

const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString()
            return [ { ...action.payload, id }, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                expense => expense.id === action.payload.id
            )
            const updatableExpense = state[updatableExpenseIndex]
            const updateItem = { ...updatableExpense, ...action.payload.data }
            const updateExpenses = [ ...state ]
            updateExpenses[updatableExpenseIndex] = updateItem
            return updateExpenses
        case 'DELETE':
            return state.filter( expense => expense.id !== action.payload)
        default:
            return state
    }
}

const ExpenseContextProvider = ({ children }) => {

    const [expensesState, dispatch] = useReducer(expensesReducer, EXPENSES)

    const addExpense = (expenseData) => {
        dispatch({ type: 'ADD', payload: expenseData })
    }

    const deleteExpense = (id) => {
        dispatch({ type: 'DELETE', payload: id })
    }

    const updateExpense = (id, expenseData) => {
        dispatch({ type: 'UPDATE', payload: { id, data: expenseData } })
    }

    const value = {
        expenses: expensesState,
        addExpense,
        deleteExpense,
        updateExpense
    }

    return (
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseContextProvider