export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
      {
        name: 'institution_name',
        title: 'Institution Name',
        type: 'string',
      },
      {
        name: 'brief',
        title: 'Brief',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'time_period',
        title: 'Time Period',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'gpa_percentage',
        title: 'GPA or Percentage',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: 'institution_name',
        subtitle: 'time_period',
        media: 'image',
      },
    },
  }
  