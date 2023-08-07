import { defineType } from "sanity";
import { siteLinks } from "../siteLinks";

export default defineType({
    name: "youthCard",
    title: "Youth Card",
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
        {
            name: "link",
            title: "Link",
            type: "string",
            options: {
                list: siteLinks,
            },
        }
    ],

    preview: {
        select: {
            title: "title",
            media: "image.image",
        },
    },
});