import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPost",
  title: "About Post",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "postLink",
      title: "Post Link",
      type: "url",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "postLink",
    },
  },
});
