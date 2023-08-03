import { defineType } from "sanity";

export default defineType({
    name: "missionCard",
    title: "Mission Card",
    type: "object",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "image",
            title: "Image",
            type: "reference",
            to: [{ type: "gallery" }],
        },
    ],

    preview: {
        select: {
            title: "title",
            media: "image.image",
        },
    },
});