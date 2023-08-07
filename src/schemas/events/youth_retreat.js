import { defineField, defineType } from "sanity";
import { youthContent } from "../defaultData";
import ArrayMaxItems from "../../components/ArrayMaxItems";

export default defineType({
    name: "youthRetreat",
    title: "Youth Retreat Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "The text to be displayed on the header image of the page",
            initialValue: youthContent.title,
        }),
        defineField({
            name: "headerImage",
            description: "The image to be displayed on the header of the page",
            title: "Header Background Image",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "youthCaptionTitle",
            title: "Youth Caption Title",
            type: "string",
            description: "The title to be displayed below the header image",
            initialValue: youthContent.youthCaptionTitle,
        }),
        defineField({
            name: "youthCaptionText",
            title: "Youth Caption Text",
            type: "text",
            description: "The text to be displayed below the title",
            initialValue: youthContent.youthCaptionText,
        }),
        defineField({
            name: "youthCards",
            title: "Youth Cards",
            type: "array",
            of: [{ type: "youthCard" }],
            validation: (Rule) => Rule.max(3),
            components: { input: ArrayMaxItems },
            description: "The cards to be displayed on the page",
            initialValue: youthContent.youthCards,
        }),
        defineField({
            name: "youthSectionTitle",
            title: "Youth Section Title",
            type: "string",
            description: "The title to be displayed above the youth section",
            initialValue: youthContent.youthSectionTitle,
        }),
        defineField({
            name: "youthSectionText",
            title: "Youth Section Text",
            type: "text",
            description: "The text to be displayed at the right side of the youth section",
            initialValue: youthContent.youthSectionText,
        }),
        defineField({
            name: "youthSectionImage",
            title: "Youth Section Image",
            type: "reference",
            to: [{ type: "gallery" }],
            description: "The image to be displayed at the left side of the youth section",
        }),
    ],
});

