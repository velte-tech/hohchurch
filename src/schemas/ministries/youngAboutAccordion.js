import { defineType } from "sanity";

export default defineType({
    name: 'youngAboutAccordion',
    title: 'Young Adults About Accordion',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the accordion',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'text',
            description: 'Text of the accordion',
        },
    ]
})