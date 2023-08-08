import { defineType } from "sanity";

export default defineType({
    name: "group",
    title: "Group",
    type: "object",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "leader",
            title: "Leader",
            type: "string",
        },
        {
            name: "bibleVerse",
            title: "Bible Verse",
            type: "string",
        },
        {
            name: "bibleVerseQuote",
            title: "Bible Verse Quote",
            type: "text",
        },
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "leader",
        },
        prepare({ title, subtitle }) {
            let subtitleText = subtitle ? `Leader - ${subtitle}` : "";
            return {
                title,
                subtitleText,
            };
        }
    },
});
