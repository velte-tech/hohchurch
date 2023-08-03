import { defineType } from "sanity";
import { BiCarousel } from "react-icons/bi"
// import ArrayMaxItems from "../components/ArrayMaxItems";

export default defineType({
    name: 'slider',
    title: 'Sliders',
    type: 'document',
    icon: BiCarousel,
    fields: [
        {
            name: 'image',
            title: 'Slider Image',
            type: 'reference',
            description: 'The image that will appear on the slider',
            to: [{ type: 'gallery' }]
        },
        {
            name: "tag",
            title: "Tag",
            type: "string",
            description: "The tag of the slider"
        },
        {
            name: 'title',
            title: 'Slider Title',
            type: 'string',
            description: 'The title that will appear on the slider'
        },
        {
            name: "author",
            title: "Author",
            type: "string",
            description: "The author of the slider",
            initialValue: "Pastor Alex Gyasi MBE"
        },
        {
            name: "link",
            title: "YouTube Link",
            type: "url",
            description: "The youtube link of the slider"
        }
    ]
})