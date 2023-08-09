import { defineField, defineType } from "sanity";
import { kidsMinistryContent } from "../defaultData";

export default defineType({
    name: 'kidsMinistry',
    title: 'Kids Ministry',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "The header title of the page",
            initialValue: kidsMinistryContent.title,
        }),
        defineField({
            name: 'headerImage',
            title: 'Header Image',
            type: 'reference',
            description: "The header image of the page",
            to: [{ type: 'gallery' }],
        }),
        defineField({
            name: "kidsShowCase1Img",
            title: "First Kids Showcase Section Image",
            description: "The first image in the kids showcase section",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "kidsShowCase1Title",
            title: "First Kids Showcase Section Title",
            description: "The first title in the kids showcase section",
            type: "string",
            initialValue: kidsMinistryContent.kidsShowCase1Title,
        }),
        defineField({
            name: "kidsShowCase1Text",
            title: "First Kids Showcase Section Text",
            description: "The first text in the kids showcase section",
            type: "text",
            initialValue: kidsMinistryContent.kidsShowCase1Text,
        }),
        defineField({
            name: "kidsShowCase2Img",
            title: "Second Kids Showcase Section Image",
            description: "The second image in the kids showcase section",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "kidsShowCase2Text",
            title: "Second Kids Showcase Section Text",
            description: "The second text in the kids showcase section box",
            type: "text",
            initialValue: kidsMinistryContent.kidsShowCase2Text,
        }),
    ],
})