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
            initialValue: homeContent.missionCards,
        }),
        defineField({
            name: "aboutImage",
            title: "About Image",
            type: "reference",
            to: [{ type: "gallery" }],
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
        defineField({
            name: "pastMessagesTitle",
            title: "Past Messages Title",
            type: "string",
            initialValue: homeContent.pastMessagesTitle,
        }),
        defineField({
            name: "pastMessagesText",
            title: "Past Messages Text",
            type: "text",
            description: "This text will appear below the past messages title.",
            initialValue: homeContent.pastMessagesText,
        }),
        defineField({
            name: "pastMessages",
            title: "Past Messages",
            type: "array",
            description: "The past messages youtube links that will appear on the home page.",
            of: [{ type: "message" }],
            initialValue: homeContent.pastMessages,
        }),
    ],
});