import { defineField, defineType } from "sanity";
import { aboutContent } from "./defaultData";

export default defineType({
    name: "about",
    title: "About Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "The text to be displayed on the header image of the page",
            initialValue: aboutContent.title,
        }),
        defineField({
            name: "headerImage",
            description: "The image to be displayed on the header of the page",
            title: "Header Image",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "aboutTitle",
            title: "About Section Title",
            type: "string",
            initialValue: aboutContent.aboutTitle,
        }),
        defineField({
            name: "aboutDescription",
            title: "About Section Description",
            type: "blockContent",
            initialValue: aboutContent.aboutDescription,
        }),
        defineField({
            name: "missionTitle",
            title: "Mission Section Title",
            type: "string",
            initialValue: aboutContent.missionTitle,
        }),
        defineField({
            name: "missionDescription",
            title: "Mission Section Description",
            type: "blockContent",
            initialValue: aboutContent.missionDescription,
        }),
        defineField({
            name: "missionImage",
            description: "The background image to be displayed on the mission section of the page",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "welcomeTitle",
            title: "Welcome Title",
            description: "The welcome section title",
            type: "string",
            initialValue: aboutContent.welcomeTitle,
        }),
        defineField({
            name: "welcomeDescription",
            title: "Welcome Description",
            description: "The text to be displayed on the welcome section",
            type: "text",
            initialValue: aboutContent.welcomeDescription,
        }),
        defineField({
            name: "welcomeImage",
            description: "The image to be displayed on the welcome section of the page",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "fellowshipTitle",
            title: "Fellowship Title",
            description: "The fellowship section title",
            type: "string",
            initialValue: aboutContent.fellowshipTitle,
        }),
        defineField({
            name: "fellowshipDescription",
            title: "Fellowship Description",
            description: "The text to be displayed under the fellowship section title",
            type: "text",
            initialValue: aboutContent.fellowshipDescription,
        }),
        defineField({
            name: "fellowshipGroups",
            title: "Fellowship Groups",
            description: "The list of fellowship groups",
            type: "array",
            of: [{
                type: "object",
                fields: [
                    {
                        name: "name",
                        title: "Name",
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
                        type: "string",
                    },
                ],
                preview: {
                    select: {
                        title: "name",
                        subtitle: "bibleVerse",
                    },
                },
            }],
            initialValue: aboutContent.fellowshipGroups,
        }),

    ]
})