import { CollectionConfig } from 'payload/types';

const Tags: CollectionConfig = {
  slug: 'notes',
  admin: {
    defaultColumns: ['name', 'author'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
  ],
  timestamps: false,
}

export default Tags;