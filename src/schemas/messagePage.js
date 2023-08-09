import { defineField, defineType } from "sanity";
import { messagePageContent } from "./defaultData";

export default defineType({
    name: "messagePage",
    title: "Message Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "Title of the message page",
            initialValue: messagePageContent.title,
        }),
        defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "string",
            description: "Subtitle of the message page",
            initialValue: messagePageContent.subtitle,
        }),
        defineField({
            name: "headerImage",
            title: "Header Image",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "messagePageCards",
            title: "Message Page Cards",
            type: "array",
            of: [{ type: "messagePageCard" }],
            description: "Cards of the message page",
            initialValue: messagePageContent.messagePageCards,
        })
    ],
});