import { defineField, defineType } from "sanity";

export default defineType({
    name: "home",
    title: "Home Page",
    type: "document",
    fields: [
        defineField({
            name: "aboutTitle",
            title: "About Title",
            type: "string",
        }),
        defineField({
            name: "captionText",
            title: "Caption Text",
            type: "string",
        }),
        defineField({
            name: "aboutDescription",
            title: "About Description",
            type: "text",
        }),
        defineField({
            name: "aboutImage",
            title: "About Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "serviceTitle",
            title: "Service Title",
            type: "string",
        }),
        defineField({
            name: "serviceDescription",
            title: "Service Description",
            type: "text",
        }),
    ],
});