import { defineField, defineType } from "sanity";
import { leadershipContent } from "./defaultData";

export default defineType({
    name: "leadership",
    title: "Leadership Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "The text to be displayed on the header image of the page",
            initialValue: leadershipContent.title,
        }),
        defineField({
            name: "headerImage",
            description: "The image to be displayed on the header of the page",
            title: "Header Image",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "leadershipTitle",
            title: "Leadership Section Title",
            type: "string",
            initialValue: leadershipContent.leadershipTitle,
        }),
        defineField({
            name: "leadershipDescription",
            title: "Leadership Section Description",
            type: "blockContent",
        }),
        defineField({
            name: "leaders",
            title: "Leaders",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "name",
                            title: "Name",
                            type: "string",
                        },
                        {
                            name: "title",
                            title: "Title",
                            type: "string",
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
                            title: "name",
                            subtitle: "title",
                            media: "image.image",
                        },
                    },
                }
            ],
            initialValue: leadershipContent.leaders,
        }),
    ],
});