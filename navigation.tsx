import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens/HomeScreens';
import ResturantScreen from './screens/ResturantScreen/ResturantScreen';
import CartScreen from './screens/CartScreens/CartScreen';
import OrderPreparingScreen from './screens/OrderPreparingScreen/OrderPreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen/DeliveryScreen';


const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreens} />
                <Stack.Screen name="Restaurant" component={ResturantScreen} />
                <Stack.Screen name="Cart" options={{ presentation: 'modal' }} component={CartScreen} />
                <Stack.Screen name="OrderPrepare" options={{ presentation: 'fullScreenModal' }} component={OrderPreparingScreen} />
                {/* it is pop up from the bottom */}
                <Stack.Screen name="DeliveringOrder" options={{ presentation: 'fullScreenModal' }} component={DeliveryScreen} />



            </Stack.Navigator>
        </NavigationContainer>
    )
}