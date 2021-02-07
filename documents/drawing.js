export default {
  name: 'drawing',
  type: 'document',
  title: 'drawing',
  fields: [{
    name: 'title',
    type: 'string',
    title: 'title'
  }, {
    name: 'slug',
    type: 'slug',
    options: {
      source: 'title'
    }
  }, {
    name: 'drawingImage',
    type: 'image',
    title: 'drawing image'
  }, {
    name: 'created',
    type: 'datetime',
    title: 'created at'
  }, {
    name: 'published',
    type: 'datetime',
    title: 'published at'
  }, {
    name: 'mediumList',
    type: 'array',
    title: 'mediums',
    of: [{
      type: 'reference',
      to: [{ type: 'artworkMedium' }]
    }]
  }, {
    name: 'referenceList',
    type: 'array',
    title: 'references',
    of: [{
      title: 'referenced url',
      type: 'object',
      fields: [{
        name: 'url',
        title: 'value',
        type: 'url'
      }]
    }, {
      type: 'image'
    }]
  }]
}