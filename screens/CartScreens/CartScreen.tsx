import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { featured } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../../theme'
import * as Icon from "react-native-feather";

export default function CartScreen() {

    const resturant = featured.restaurants[0]

    const navigation = useNavigation()

    return (
        <View className='bg-white flex-1'>
            <View className='relative py-4 shadow-sm'>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className='absolute z-10 rounded-full p-1 top-5 left-2'
                >
                    <Icon.ArrowLeft strokeWidth={3} stroke='white' />
                </TouchableOpacity>
                <View>
                    <Text className='text-center font-bold text-xl text-black'>Your Cart</Text>
                    <Text className='text-center text-gray-500'>{resturant.name}</Text>
                </View>
            </View>


            {/*delivery Time*/}

            <View className='flex-row px-4 items-center' style={{ backgroundColor: themeColors.bgColor(0.2) }}>
                <Image source={require('../../assets/images/bikeGuy.png')} className='w-20 h-20 rounded-full' />
                <Text className='flex-1 pl-4 text-black'>Deliver in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text className='font-bold' style={{ color: themeColors.text }}>
                        Change
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50
                }}
                className='bg-white pt-5'
            >
                {
                    resturant.dishes.map((dish, index) => {
                        return (
                            <View key={index} className='flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'>
                                <Text className='font-bold' style={{ color: themeColors.text }}> 2 × </Text>
                                <Image className='h-14 w-14 rounded-full' source={dish.image} />
                                <Text className='flex-1 font-bold text-grey-700'>{dish.name}</Text>
                                <Text className='font-semibold text-base text-black'> ${dish.price}</Text>
                                <TouchableOpacity
                                    className='p-1 rounded-full'
                                    style={{ backgroundColor: themeColors.bgColor(1) }}
                                >
                                    <Icon.Minus stroke='white' strokeWidth={2} height={20} width={20} />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }

            </ScrollView>

            <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className='p-6 px-8 rounded-t-3xl space-y-4' >
                <View className='flex-row justify-between'>
                    <Text className='text-gray-700'>
                        Subtotal
                    </Text>
                    <Text className='text-gray-700'>
                        $20
                    </Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-700'>
                        Delivery Fee
                    </Text>
                    <Text className='text-gray-700'>
                        $20
                    </Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-700 font-extrabold'>
                        Order Total
                    </Text>
                    <Text className='text-gray-700 font-extrabold'>
                        $20
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OrderPrepare')}
                        className='p-3 rounded-full'
                        style={{ backgroundColor: themeColors.bgColor(1) }
                        }
                    >
                        <Text className='text-white font-bold text-lg text-center'>Place Order</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}