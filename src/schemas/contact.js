import { defineField, defineType } from "sanity";
import { contactPageContent } from "./defaultData";

export default defineType({
    name: "contact",
    title: "Contact Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "The text to be displayed on the header image of the page",
            initialValue: contactPageContent.title,
        }),
        defineField({
            name: "headerImage",
            description: "The image to be displayed on the header of the page",
            title: "Header Image",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "address",
            title: "Address",
            type: "string",
            initialValue: contactPageContent.address,
        }),
        defineField({
            name: "phone",
            title: "Phone",
            type: "string",
            initialValue: contactPageContent.phone,
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
            initialValue: contactPageContent.email,
        }),
        defineField({
            name: "bannerImage",
            description: "The image to be displayed on the banner of the page",
            title: "Banner Image",
            type: "reference",
            to: [{ type: "gallery" }],
        }),
        defineField({
            name: "bannerTitle",
            title: "Banner Title",
            type: "string",
            initialValue: contactPageContent.bannerTitle,
        }),
        defineField({
            name: "bannerText",
            title: "Banner Text",
            type: "text",
            initialValue: contactPageContent.bannerText,
        }),
        defineField({
            name: "bannerButtonText",
            title: "Banner Button Text",
            type: "string",
            initialValue: contactPageContent.bannerButtonText,
        }),
    ]

});