// import sanityClient from "@sanity/client";
import sanityClient, { createClient } from '@sanity/client'
import imageBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: '6pfpesiq',//using project id we can access the project
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})

const builder = imageBuilder(client)

export const urlFor = (source: any) => builder.image(source)

export default client