import { Text, FlatList } from "react-native"

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList 
      data={expenses}
      renderItem={(itemData) => <Text>{itemData.item.description}</Text>}
      keyExtractor={(item) => item.id}
    />
  )
}

export default ExpensesList