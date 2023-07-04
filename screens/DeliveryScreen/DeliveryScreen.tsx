import { Linking, Platform, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { featured } from '../../constants'
import { themeColors } from '../../theme'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native'

export default function DeliveryScreen() {

    const restaurant = featured.restaurants[0]

    const navigation = useNavigation()

    const dialCall = (number: number) => {
        let phoneNumber = '';
        if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
        else { phoneNumber = `telprompt:${number}`; }
        Linking.openURL(phoneNumber);
    };

    return (
        <View className='flex-1'>
            <MapView
                className='flex-1'
                mapType='standard'
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,

                }}

            >
                <Marker
                    draggable
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng
                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                    pinColor={themeColors.bgColor(1)}
                ></Marker>

            </MapView>
            <View className='rounded-t-3xl -mt-12 bg-white relative'>
                <View className='flex-row justify-between px-5 pt-10'>
                    <View>
                        <Text className='text-lg text-gray-700 font-semibold'>
                            Estimated Arrival
                        </Text>
                        <Text className='text-3xl font-extrabold text-gray-700'>
                            20-30 minutes
                        </Text>
                        <Text className='mt-2 font-semibold text-gray-700'>
                            Your order is own its way!
                        </Text>
                    </View>
                    <Image className='w-24 h-24' source={require('../../assets/images/bikeGuy2.gif')} />

                </View>
                <View
                    style={{ backgroundColor: themeColors.bgColor(0.8) }}
                    className='p-2 flex-row justify-between items-center rounded-full my-5  mx-2'
                >
                    <View
                        className='rounded-full p-1'
                        style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
                    >
                        <Image source={require('../../assets/images/deliveryGuy.png')} className='w-16 h-16 rounded-full' />

                    </View>
                    <View className='flex-1 ml-3'>
                        <Text className='text-lg font-bold text-white'>
                            Ravi Josh
                        </Text>
                        <Text className='text-md font-semibold text-white'>
                            Your Rider
                        </Text>
                    </View>
                    <View className='flex-row items-center space-x-3 mr-3'>
                        <TouchableOpacity className='rounded-full bg-white p-2'
                            onPress={() => { dialCall(123456789) }}
                        >
                            <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1} />

                        </TouchableOpacity>
                        <TouchableOpacity className='rounded-full bg-white p-2'
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Icon.X fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={4} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View >
    )
}