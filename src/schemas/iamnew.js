import { defineField, defineType } from "sanity";
import { iamnewContent } from "./defaultData";

export default defineType({
    name: "iamnew",
    title: "I Am New Page",
    type: "document",
    fields: [
        defineField({
            name: "aboutTitle",
            title: "About Title",
            type: "string",
            initialValue: iamnewContent.aboutTitle,
        }),
        defineField({
            name: "aboutDescription",
            title: "About Description",
            type: "text",
            initialValue: iamnewContent.aboutDescription,
        }),
        defineField({
            name: "aboutImage",
            description: "Image to be displayed next to the about text",
            title: "About Image",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "whatToExpectTitle",
            title: "What To Expect Title",
            type: "string",
            initialValue: iamnewContent.whatToExpectTitle,
        }),
        defineField({
            name: "whatToExpectDescription",
            title: "What To Expect Description",
            type: "text",
            initialValue: iamnewContent.whatToExpectDescription,
        }),
        defineField({
            name: "whatToExpectImage",
            description: "Image to be displayed next to the 'what to expect' text",
            title: "What To Expect Image",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
    ]
})