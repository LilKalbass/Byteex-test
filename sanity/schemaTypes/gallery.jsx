export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Gallery Name',
            type: 'string'
        },
        {
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [{type: 'image'}]
        }
    ]
}