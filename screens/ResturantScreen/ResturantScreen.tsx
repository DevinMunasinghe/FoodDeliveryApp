import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColors } from '../../theme';
import DishRow from '../../components/DishRow';
import CartIcon from '../../components/cartIcon';


export default function ResturantScreen() {

    const { params } = useRoute()
    let item: any = params;
    // console.log("items>>>", item)

    const navigation = useNavigation();

    return (
        <View>
            {/* <CartIcon /> */}
            <CartIcon />
            <StatusBar barStyle="light-content" />
            <ScrollView>
                <View className='relative'>
                    <Image className='w-full h-72' source={item.image} />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'>
                        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />

                    </TouchableOpacity>
                </View>
                <View className='bg-white -mt-12 pt-6' style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                    <View className='px-5'>
                        <Text className='text-3xl font-bold text-black mb-2'>{item.name}</Text>
                        <View className='flex-row items-center space-x-1 mb-2'>

                            <View className=" flex-row items-center space-x-1 ">
                                <Image source={require("../../assets/images/fullStar.png")} className='h-4 w-4' />
                                <Text className='text-xs'>
                                    <Text className='text-green-700'>{item.stars} . </Text>
                                    <Text className='text-gray-700'>
                                        ( {item.reviews} review) . <Text className='font-semibold'>{item.category}</Text>
                                    </Text>
                                </Text>
                            </View>
                            <View className='flex-row items-center space-x-1'>
                                <Icon.MapPin color="gray" width="15" height="15" />
                                <Text className='text-gray-700 text-xs'>Nearby . {item.address}</Text>
                            </View>
                        </View>
                        <Text className='text-gray-500 mt-2'>
                            {item.description}
                        </Text>
                    </View>
                </View>
                <View className='pb-36 bg-white'>
                    <Text className='px-4 py-4 text-2xl font-bold text-black'>
                        Menu
                    </Text>
                    {
                        item.dishes.map((dish: any, index: any) => { return (<DishRow item={{ ...dish }} key={index} />) })
                    }
                </View>
            </ScrollView>
        </View>
    )
}