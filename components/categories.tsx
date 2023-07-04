import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
// import { categories } from '../constants'
import { getFeaturedCategories } from '../api/SanityApi/sanityApi'
import { Category } from '../models/Category.model'
import { urlFor } from '../sanity'

export default function Categories() {
    let [activeCategory, setActiveCategory] = useState<number | null>()

    const [categories, setCategoryList] = useState<Category[]>([])
    useEffect(() => {
        getFeaturedCategories().then(data => {
            console.log("data>>>", data)
            setCategoryList(data)
        })
    }, [])


    return (
        <View>
            <View className='mt-4'>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className='overflow-visible'
                    contentContainerStyle={{
                        paddingHorizontal: 15
                    }}
                >
                    {
                        categories.map((category, index) => {

                            let isActive = category._id == activeCategory;
                            let btnClass = isActive ? ' bg-gray-400 ' : ' bg-gray200 ';
                            let textClass = isActive ? ' font-semibold text-gray-800 ' : ' text-gray-500 ';

                            return (
                                <View key={index} className='flex justify-center items-center mr-6 '>
                                    <TouchableOpacity
                                        onPress={() => setActiveCategory(category._id)}
                                        className={'p-1 rounded-full shadow bg-gray-200 ' + btnClass}>
                                        <Image style={{ width: 45, height: 45 }} source={{ uri: urlFor(category.image).url() }} className='rounded-full' />
                                    </TouchableOpacity>
                                    <Text className={'text-sm font-bold' + textClass}>{category.name}</Text>

                                </View>
                            )
                        })
                    }

                </ScrollView>
            </View>
        </View>
    )
}