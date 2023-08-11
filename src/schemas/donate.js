import { defineField, defineType } from "sanity";
import { donateContent } from "./defaultData";
import ArrayMaxItems from "../components/ArrayMaxItems";

export default defineType({
    name: "donate",
    title: "Donate Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            initialValue: "Donate Page",
            readOnly: true,
        }),
        defineField({
            name: "supportText",
            title: "Support Text",
            type: "text",
            description: "The text under the 'Support a Cause' Title",
            initialValue: donateContent.supportText,
        }),
        defineField({
            name: "paymentMethodList",
            title: "Payment Method List",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            initialValue: donateContent.paymentMethodList,
            components: { input: ArrayMaxItems },
            validation: (Rule) => Rule.max(4),

        }),
        defineField({
            name: "methods",
            title: "Payment Method Details",
            type: "array",
            of: [
                {
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
                            name: "steps",
                            title: "Payment Steps",
                            type: "array",
                            of: [
                                {
                                    type: "text",
                                },
                            ],
                        },
                    ],
                },
            ],
            initialValue: donateContent.methods,
            components: { input: ArrayMaxItems },
            validation: (Rule) => Rule.max(4),
        }),
    ],
});
