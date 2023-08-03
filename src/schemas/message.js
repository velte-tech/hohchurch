import { defineField, defineType } from "sanity";

export default defineType({
    name: "message",
    title: "Message",
    type: "object",
    fields: [
        defineField({
            name: "youtubeId",
            title: "Youtube ID",
            type: "string",
            description: "The ID of the youtube video",
        })
    ],

    preview: {
        select: {
            title: "youtubeId",
        },
        prepare({ title }) {
            return {
                title: `https://youtu.be/${title}`,
            };
        }
    },
})