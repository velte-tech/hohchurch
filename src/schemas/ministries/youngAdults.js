import { defineField, defineType } from "sanity";
import { youngAdultsContent } from "../defaultData";

export default defineType({
    name: 'youngAdults',
    title: 'Young Adults Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the young adults page',
            initialValue: youngAdultsContent.title,
        }),
        defineField({
            name: 'headerImage',
            title: 'Header Image',
            type: 'reference',
            to: [{ type: 'gallery' }],
        }),
        defineField({
            name: 'aboutSectionImg',
            title: 'About Section Image',
            type: 'reference',
            to: [{ type: 'gallery' }],
        }),
        defineField({
            name: 'aboutSectionTitle',
            title: 'About Section Title',
            type: 'string',
            description: 'Title of the about section',
            initialValue: youngAdultsContent.aboutSectionTitle,
        }),
        defineField({
            name: 'aboutSectionText',
            title: 'About Section Description',
            type: 'blockContent',
            description: 'Description of the about section',
            initialValue: youngAdultsContent.aboutSectionText,
        }),
        defineField({
            name: 'aboutSectionAccordions',
            title: 'About Section Accordions',
            type: 'array',
            of: [{ type: 'youngAboutAccordion' }],
            description: 'Accordions of the Young Adult about section',
            initialValue: youngAdultsContent.aboutSectionAccordions,
        }),
        defineField({
            name: 'eventsSectionTitle',
            title: 'Young Adults Events Section Title',
            type: 'string',
            description: 'Title of the events section',
            initialValue: youngAdultsContent.eventsSectionTitle,
        }),
        defineField({
            name: 'eventsCards',
            title: 'Young Adults Events Cards',
            type: 'array',
            of: [{ type: 'youngEventsCard' }],
            description: 'Cards of the Young Adult events section',
            initialValue: youngAdultsContent.eventsCards,
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                        description: 'Title of the social link',
                        readOnly: true,
                    },
                    {
                        name: 'url',
                        title: 'URL',
                        type: 'url',
                        description: 'URL of the social link',
                    }
                ],
                preview: {
                    select: {
                        title: 'title',
                        subtitle: 'url',
                    },
                },
            }],
            description: 'Social links of the Young Adult page',
            initialValue: [
                {
                    title: 'YouTube',
                },
                {
                    title: 'Facebook',
                },
                {
                    title: 'Instagram',
                },
            ]
        }),
    ]
})
