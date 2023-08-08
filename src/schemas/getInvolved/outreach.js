import { defineField, defineType } from "sanity";
import { outreachContent } from "../defaultData";

export default defineType({
    name: "outreach",
    title: "Outreach",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            initialValue: outreachContent.title,
        }),
        defineField({
            name: "headerImage",
            title: "Header Image",
            type: "reference",
            to: [{ type: "gallery" }],
            description: "The image to be displayed on the header of the page",
        }),
    ],
});