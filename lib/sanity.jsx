import {createClient} from 'next-sanity'
import ImageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId: 'j9h8d3i1',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true
})

const imgBuilder = ImageUrlBuilder(client)
export function urlFor(source) {
    return imgBuilder.image(source)
}