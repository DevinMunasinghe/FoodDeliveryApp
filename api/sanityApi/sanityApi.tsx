// import createClient from "../../sanity"

// let sanityQuery = ({ query, params }: any) => createClient.fetch(query, params)

// export const getFeaturedResturants = () => {
//     return sanityQuery(`
//     *[_type == 'featured']{
//         ...,
//         resturant[]->{
//           ...,
//           dish[]->{
//               ...
//             },
//           type->{
//           name
//           }

//         }
//       }
//     `)
// }

// export const getFeaturedCategories = () => {
//     return sanityQuery(`
//         *[_type == 'category']
//     `)
// }

import client from "../../sanity";

export async function getFeaturedCategories() {
    try {


        //calling the query
        const posts = await client.fetch('*[_type == "category"]')

        return posts
    } catch (error) {
        // console.log('BAKEND>>>>', error)
    }
}