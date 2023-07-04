import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OrderPreparingScreen() {

    const navigation = useNavigation()

    useEffect(() => {

        setTimeout(() => {
            navigation.navigate('DeliveringOrder')
        }, 3000)
    }, [])

    return (
        <View className='flex-1  justify-center items-center'>
            <Image source={require('../../assets/images/delivery.gif')} className='w-80 h-80' />
        </View>
    )
}