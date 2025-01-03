import { type SchemaTypeDefinition } from 'sanity'
import category from './category'  // Category schema import
import banner from './banner'      // Banner schema import

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    category,  // Category schema ko types array mein add karna
    banner,    // Banner schema ko types array mein add karna
  ],
}
