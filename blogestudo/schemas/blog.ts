import {title} from 'process'

export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the blog post!',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug do blog.',
      options: {
        source: title,
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title image',
    },
    {
      name: 'smalldescription',
      type: 'text',
      title: 'Small description.',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
