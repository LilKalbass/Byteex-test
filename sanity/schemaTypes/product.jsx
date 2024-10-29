export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Product Name',
            type: 'string'
        },
        {
            name: 'image',
            title: "Product Image",
            type: 'image'
        },
        {
            name: 'status',
            title: "Status",
            type: 'array',
            of: [{type: 'reference', to: {type: 'status'}}]
        }
    ]
}