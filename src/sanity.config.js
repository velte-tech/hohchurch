import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { deskStructure } from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'HOH Church CMS',

  projectId: 'ytplgt5v',
  dataset: 'production',

  basePath: '/admin',

  plugins: [
    deskTool({
      structure: deskStructure,
    }),

    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
