import { defineType } from "sanity";

export default defineType({
    name: 'youngEventsCard',
    title: 'Young Adults Events Card',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the card',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'text',
            description: 'Text of the card',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'reference',
            to: [{ type: 'gallery' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'text',
            media: 'image.image',
        },
    },
})