import { defineField, defineType } from "sanity";
import { siteLinks } from "../siteLinks";
import { ministriesContent } from "../defaultData";

export default defineType({
    name: 'ministries',
    title: 'Ministries Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The title of the page',
            initialValue: ministriesContent.title
        }),
        defineField({
            name: 'headerImage',
            title: 'Header Image',
            type: 'reference',
            to: [{ type: 'gallery' }],
        }),
        defineField({
            name: 'ministryList',
            title: 'Ministry List',
            type: 'array',
            of: [{
                type: "object",
                fields: [
                    {
                        name: 'name',
                        title: 'Name',
                        description: 'The name of the ministry',
                        type: 'string',
                    },
                    {
                        name: "image",
                        title: "Image",
                        type: "reference",
                        to: [{ type: "gallery" }],
                        description: "An image show-case of the ministry",
                    },
                    {
                        name: "link",
                        title: "Link",
                        type: "string",
                        description: "The link to the ministry page",
                        options: {
                            list: siteLinks
                        }
                    }
                ],
                preview: {
                    select: {
                        title: 'name',
                        media: 'image.image'
                    }
                }
            }],
            initialValue: ministriesContent.ministryList
        })
    ],
})