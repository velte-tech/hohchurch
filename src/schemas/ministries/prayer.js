import { defineField, defineType } from "sanity";
import { prayerContent } from "../defaultData";

export default defineType({
    name: 'prayerPage',
    title: 'Prayer Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the prayer page',
            initialValue: prayerContent.title
        }),
        defineField({
            name: 'prayerSectionTitle',
            title: 'Prayer Section Title',
            type: 'string',
            description: 'Title of the prayer section',
            initialValue: prayerContent.prayerSectionTitle
        }),
        defineField({
            name: 'prayerSectionText',
            title: 'Prayer Section Description',
            type: 'blockContent',
            description: 'Description of the prayer section'
        }),
    ]
})