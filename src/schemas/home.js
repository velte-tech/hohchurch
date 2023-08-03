import { defineField, defineType } from "sanity";
import { homeContent } from "./defaultData";

export default defineType({
    name: "home",
    title: "Home Page",
    type: "document",
    fields: [
        defineField({
            name: "welcomeTitle",
            title: "Welcome Title",
            type: "string",
            initialValue: homeContent.welcomeTitle,
        }),
        defineField({
            name: "welcomeSubtitle",
            title: "Welcome Subtitle",
            type: "string",
            initialValue: homeContent.welcomeSubtitle,
        }),
        defineField({
            name: "missionTitle",
            title: "Mission Title",
            type: "string",
            initialValue: homeContent.missionTitle,
        }),
        defineField({
            name: "missionDescription",
            title: "Mission Description",
            type: "text",
            initialValue: homeContent.missionDescription,
        }),
        defineField({
            name: "missionCards",
            title: "Mission Cards",
            type: "array",
            of: [{ type: "missionCard" }],
        }),
        defineField({
            name: "aboutImage",
            title: "About Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "aboutTitle",
            title: "About Title",
            type: "string",
            initialValue: homeContent.aboutTitle,
        }),
        defineField({
            name: "aboutDescription",
            title: "About Description",
            type: "text",
            initialValue: homeContent.aboutDescription,
        }),
    ],
});