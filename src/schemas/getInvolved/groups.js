import { defineField, defineType } from "sanity";
import { groupContent } from "../defaultData";

export default defineType({
    name: "groupsPage",
    title: "Groups Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "The text to be displayed on the header image of the page",
            initialValue: groupContent.title,
        }),
        defineField({
            name: "headerImage",
            description: "The image to be displayed on the header of the page",
            title: "Header Background Image",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "fellowshipTitle",
            title: "Fellowship Title",
            type: "string",
            description: "The title to be displayed on the fellowship section",
            initialValue: groupContent.fellowshipTitle,
        }),
        defineField({
            name: "fellowshipText",
            title: "Fellowship Description",
            type: "text",
            description: "The text to be displayed on the fellowship section",
            initialValue: groupContent.fellowshipText,
        }),
        defineField({
            name: "fellowshipGroups",
            title: "Fellowship Groups",
            type: "array",
            of: [{ type: "group" }],
            description: "The groups to be displayed on the fellowship section",
            initialValue: groupContent.groups,
        }),
    ]
})