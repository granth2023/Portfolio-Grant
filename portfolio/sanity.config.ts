import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './PortfolioGrant/schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Grant',

  projectId: 'yocvk02f',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})