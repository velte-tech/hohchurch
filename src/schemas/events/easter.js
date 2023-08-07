import { defineField, defineType } from "sanity";
import { easterContent } from "../defaultData";
import ArrayMaxItems from "../../components/ArrayMaxItems";

export default defineType({
    name: "easterPage",
    title: "Easter Service Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "The text to be displayed on the header image of the page",
            initialValue: easterContent.title,
        }),
        defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "string",
            description: "The text to be displayed below the title",
            initialValue: easterContent.subtitle,
        }),
        defineField({
            name: "headerImage",
            description: "The image to be displayed on the header of the page",
            title: "Header Background Image",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "easterCaptionTitle",
            title: "Easter Caption Title",
            type: "string",
            description: "The title to be displayed below the header image",
            initialValue: easterContent.easterCaptionTitle,
        }),
        defineField({
            name: "easterCaptionText",
            title: "Easter Caption Text",
            type: "text",
            description: "The text to be displayed below the title",
            initialValue: easterContent.easterCaptionText,
        }),
        defineField({
            name: "easterCards",
            title: "Easter Cards",
            type: "array",
            of: [{ type: "easterCard" }],
            validation: (Rule) => Rule.max(3),
            components: { input: ArrayMaxItems },
            description: "The cards to be displayed on the page",
            initialValue: easterContent.easterCards,
        }),

    ],
});

