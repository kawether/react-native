import { createNativeStackNavigator } from "@react-navigation/native-stack"
import routes from "../common/routes"
import UserDetails from "../screens/UserDetails"
import Users from "../screens/Users"

const Stack = createNativeStackNavigator()

export default function Root() {
    return <Stack.Navigator>
        <Stack.Screen name={routes.users} component={Users} options={{
            headerTitle: 'Users',
            headerStyle: {
                backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontSize: 30,
            },
            headerTitleAlign: 'center',
        }} />
        <Stack.Screen name={routes.userDetails} component={UserDetails}
            options={{
                headerStyle: {
                    backgroundColor: 'blue',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontSize: 30,
                },
                headerTitleAlign: 'center'
            }}
        />
    </Stack.Navigator>
}