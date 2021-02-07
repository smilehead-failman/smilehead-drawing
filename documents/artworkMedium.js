export default {
  name: 'artworkMedium',
  type: 'document',
  title: 'artwork medium',
  fields: [{
    name: 'description',
    type: 'string',
    title: 'medium description'
  }, {
    name: 'relatedUrlList',
    type: 'array',
    title: 'related URLs',
    of: [{ type: 'url' }]
  }]
};