import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { Ionicons } from '@expo/vector-icons'
import IconButton from './components/UI/IconButton';
import { useNavigation } from '@react-navigation/native';
import ExpenseContextProvider from './context/expenses';

export default function App() {

  const Stack = createNativeStackNavigator()
  const BottomTabs = createBottomTabNavigator()

  const ExpensesOverview = () => {

    const navigation = useNavigation()

    return (
      <BottomTabs.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          tabBarStyle: { backgroundColor: '#000'},
          // tabBarActiveTintColor: '#fff'
          headerRight: (color) => (
            <IconButton 
              icon='add'
              size={28}
              color='#fff'
              onPress={() => {navigation.navigate('ManageExpense')}}
            />
          )
        }}
      >
        <BottomTabs.Screen 
          name='RecentExpenses' 
          component={RecentExpenses}
          options={{
            title: 'Recent Expenses',
            tabBarLabel: 'Recent',
            tabBarIcon: ({color, size}) => <Ionicons name='hourglass' color={color} size={size}/>
          }}
        />
        <BottomTabs.Screen 
          name='AllExpenses' 
          component={AllExpenses}
          options={{
            title: 'All Expenses',
            tabBarLabel: 'All Expenses',
            tabBarIcon: ({color, size}) => <Ionicons name='calendar' color={color} size={size}/>
          }}
        />
      </BottomTabs.Navigator>
    )
  }

  return (
      <>
        <StatusBar style="light" />
        <ExpenseContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: '#000' },
                headerTintColor: '#fff',
                tabBarStyle: { backgroundColor: '#000'},
              }}
            >
              <Stack.Screen 
                name='ExpensesOverview' 
                component={ExpensesOverview} 
                options={{ headerShown: false }}  
              />
              <Stack.Screen 
                name='ManageExpense' 
                component={ManageExpenses}
                options={{
                  title: 'Manage Expense'
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ExpenseContextProvider>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
