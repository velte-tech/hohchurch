import { defineField, defineType } from "sanity";
import { outreachDetailsContent } from "./defaultData";

export default defineType({
    name: 'outreachDetail',
    title: 'Outreach Detail',
    type: 'document',
    fields: [
        defineField({
            name: "localCommunityTitle",
            title: "Local Community Title",
            type: "string",
            initialValue: outreachDetailsContent.localCommunityTitle
        }),
        defineField({
            name: 'highwayHouseTitle',
            title: 'Highway House Title',
            type: 'string',
            initialValue: outreachDetailsContent.highwayHouseTitle
        }),
        defineField({
            name: 'highwayHouseText',
            title: 'Highway House Text',
            type: 'blockContent',
        }),
        defineField({
            name: 'highwayYouthClubTitle',
            title: 'Highway Youth Club Title',
            type: 'string',
            initialValue: outreachDetailsContent.highwayYouthClubTitle
        }),
        defineField({
            name: 'highwayYouthClubText',
            title: 'Highway Youth Club Text',
            type: 'blockContent',
        }),
        defineField({
            name: "the21CenturyTitle",
            title: "21st Century Title",
            type: "string",
            initialValue: outreachDetailsContent.the21CenturyTitle
        }),
        defineField({
            name: "the21CenturyText",
            title: "21st Century Text",
            type: "blockContent",
        }),
        defineField({
            name: "shiftTitle",
            title: "Shift Title",
            type: "string",
            initialValue: outreachDetailsContent.shiftTitle
        }),
        defineField({
            name: "shiftText",
            title: "Shift Text",
            type: "blockContent",
        }),
        defineField({
            name: "globalMissionsTitle",
            title: "Global Missions Title",
            type: "string",
            initialValue: outreachDetailsContent.globalMissionsTitle
        }),
        defineField({
            name: "klmTitle",
            title: "KLM Text",
            type: "string",
            initialValue: outreachDetailsContent.klmTitle
        }),
        defineField({
            name: "klmText",
            title: "KLM Text",
            type: "blockContent",
        }),
        defineField({
            name: "hohPakistanTitle",
            title: "HOH Pakistan Title",
            type: "string",
            initialValue: outreachDetailsContent.hohPakistanTitle
        }),
        defineField({
            name: "hohPakistanText",
            title: "HOH Pakistan Text",
            type: "blockContent",
        }),
        defineField({
            name: "kcaTitle",
            title: "KCA Title",
            type: "string",
            initialValue: outreachDetailsContent.kcaTitle
        }),
        defineField({
            name: "kcaText",
            title: "KCA Text",
            type: "blockContent",
        }),
        defineField({
            name: "affiliatesTitle",
            title: "Affiliates Title",
            type: "string",
            initialValue: outreachDetailsContent.affiliatesTitle
        }),
        defineField({
            name: "affiliatesText",
            title: "Affiliates Text",
            type: "blockContent",
        }),
    ]
})