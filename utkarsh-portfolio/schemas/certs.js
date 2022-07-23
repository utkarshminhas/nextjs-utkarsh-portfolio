export default {
  name: 'certifications',
  title: 'Certifications',
  type: 'document',
  fields: [
    {
      name: 'certification_name',
      title: 'Certification Name',
      type: 'string',
    },
    {
      name: 'issued_by_name',
      title: 'Issued by name',
      type: 'string',
    },
    {
      name: 'issued_by_image',
      title: 'Issued by Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date_of_issue',
      title: 'Date of Issue',
      type: 'date',
      options:{
        // dateFormat: 'YYYY-MM',
        dateFormat: 'MMMM-YYYY',
      }
    },
    {
      name: 'certificate_url',
      title: 'Certificate URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'certification_name',
      subtitle : 'date_of_issue',
      media: 'issued_by_image',
    },
  },
}
