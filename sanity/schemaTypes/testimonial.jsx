export default {
    name: 'item',
    title: 'Testimonial',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Testimonial Author fullName',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Author Image',
            type: 'image',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'rating',
            title: "Rating",
            type: 'number'
        },
        {
            name: 'status',
            title: "Status",
            type: 'reference',
            to: {type: 'status'}
        }
    ]
}