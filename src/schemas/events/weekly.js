import { defineField, defineType } from "sanity";
import { weeklyContent } from "../defaultData";
import ArrayMaxItems from "../../components/ArrayMaxItems";

export default defineType({
    name: "weeklyProgrammes",
    title: "Weekly Programmes Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "The text to be displayed on the header image of the page",
            initialValue: weeklyContent.title,
        }),
        // defineField({
        //     name: "subtitle",
        //     title: "Subtitle",
        //     type: "string",
        //     description: "The text to be displayed below the title",
        //     initialValue: weeklyContent.subtitle,
        // }),
        defineField({
            name: "headerImage",
            description: "The image to be displayed on the header of the page",
            title: "Header Background Image",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "weeklyTitle",
            title: "Weekly Programmes Title",
            type: "string",
            initialValue: weeklyContent.weeklyTitle,
        }),
        defineField({
            name: "weeklyText",
            title: "Weekly Programmes Text",
            type: "blockContent",
        }),
        defineField({
            name: "weeklyCaptionTitle",
            title: "Weekly Caption Title",
            type: "string",
            description: "The title to be displayed below the header image",
            initialValue: weeklyContent.weeklyCaptionTitle,
        }),
        defineField({
            name: "weeklyCaptionText",
            title: "Weekly Caption Text",
            type: "text",
            description: "The text to be displayed below the title",
            initialValue: weeklyContent.weeklyCaptionText,
        }),
        defineField({
            name: "pastorName",
            title: "Pastor's Name",
            type: "string",
            initialValue: weeklyContent.pastorName,
        }),
        defineField({
            name: "pastorBio",
            title: "Pastor's Bio",
            type: "text",
            initialValue: weeklyContent.pastorBio,
        }),
        // defineField({
        //     name: "pastorTitle",
        //     title: "Pastor's Title",
        //     type: "text",
        //     initialValue: weeklyContent.pastorTitle,
        // }),
        defineField({
            name: "pastorImage",
            title: "Pastor's Image",
            type: "reference",
            to: [{ type: "gallery" }],
            description: "The image to be displayed at the left side of the pastor's bio",
        }),
        defineField({
            name: "weeklyCards",
            title: "Weekly Cards",
            type: "array",
            of: [{ type: "weeklyCard" }],
            validation: (Rule) => Rule.max(3),
            components: { input: ArrayMaxItems },
            description: "The cards to be displayed on the page",
            initialValue: weeklyContent.weeklyCards,
        }),

    ],
});

