import { defineField, defineType } from "sanity";

export default defineType({
    name: "messagePageCard",
    title: "Message Page Card",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "Title of the message page card",
        }),
        defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "string",
            description: "Subtitle of the message page card",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "messageLink",
            title: "Message Link",
            type: "message",
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "messageLink.youtubeId",
            media: "image.image",
        },
        prepare({ title, subtitle, media }) {
            return {
                title: title,
                subtitle: `https://youtu.be/${subtitle}`,
                media: media,
            };
        }
    }
});