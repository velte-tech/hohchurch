import { defineField, defineType } from "sanity";
import { adultContent } from "../defaultData";
import ArrayMaxItems from "../../components/ArrayMaxItems";

export default defineType({
    name: "adultRetreat",
    title: "Adult Retreat Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "The text to be displayed on the header image of the page",
            initialValue: adultContent.title,
        }),
        defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "string",
            description: "The text to be displayed below the title",
            initialValue: adultContent.subtitle,
        }),
        defineField({
            name: "headerImage",
            description: "The image to be displayed on the header of the page",
            title: "Header Background Image",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "adultCaptionTitle",
            title: "Adult Caption Title",
            type: "string",
            description: "The title to be displayed below the header image",
            initialValue: adultContent.adultCaptionTitle,
        }),
        defineField({
            name: "adultCaptionText",
            title: "Adult Caption Text",
            type: "text",
            description: "The text to be displayed below the title",
            initialValue: adultContent.adultCaptionText,
        }),
        defineField({
            name: "adultCards",
            title: "Adult Cards",
            type: "array",
            of: [{ type: "adultCard" }],
            validation: (Rule) => Rule.max(3),
            components: { input: ArrayMaxItems },
            description: "The cards to be displayed on the page",
            initialValue: adultContent.adultCards,
        }),
        defineField({
            name: "pastorName",
            title: "Pastor's Name",
            type: "string",
            initialValue: adultContent.pastorName,
        }),
        defineField({
            name: "pastorBio",
            title: "Pastor's Bio",
            type: "string",
            initialValue: adultContent.pastorBio,
        }),
        defineField({
            name: "pastorTitle",
            title: "Pastor's Title",
            type: "text",
            initialValue: adultContent.pastorTitle,
        }),
        defineField({
            name: "pastorImage",
            title: "Pastor's Image",
            type: "reference",
            to: [{ type: "gallery" }],
            description: "The image to be displayed at the left side of the pastor's bio",
        }),
    ],
});

