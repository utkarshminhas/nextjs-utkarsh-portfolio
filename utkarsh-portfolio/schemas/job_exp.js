export default {
  name: 'job_exp',
  title: 'Job Experience',
  type: 'document',
  fields: [
    {
      name: 'company_name',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'company_location',
      title: 'Company Location',
      type: 'string',

    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'start_time',
      title: 'Start Time',
      type: 'date',
      options:{
        // dateFormat: 'YYYY-MM',
        dateFormat: 'DD-MMMM-YYYY',
      }
    },
    {
      name: 'end_time',
      title: 'End Time',
      type: 'datetime',
    },
    {
      name: 'company_image',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'company_name',
      subtitle : 'company_location',
      media: 'company_image',
    },
  },
}
