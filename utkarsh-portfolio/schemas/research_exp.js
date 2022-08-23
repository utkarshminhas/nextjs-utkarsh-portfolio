export default {
    name: 'research_exp',
    title: 'Research Experience',
    type: 'document',
    fields: [
        {
            name:"paper_name",
            title:"Paper Name",
            type: 'string',
       },
        
        {
            name:"published_on",
            title:"Published On",
            type: 'string',
        },
        {
            name:"first_online",
            title:"First Online",
            type: 'string',
        },
        {
            name:"publisher",
            title:"Publisher",
            type: 'string',
        },
        {
            name:"conference_name",
            title:"Conference Name",
            type: 'string',
        },
        {
            name:"conference_subtitle",
            title:"Conference Subtitle",
            type: 'string',
        },
        {
            name:"conference_dates",
            title:"Conference Dates",
            type: 'string',
        },
        {
            name:"paper_description",
            title:"Paper Description",
            type: 'string',
        },
        {
            name:"link",
            title:"Research paper link",
            type: 'url',
        },
        {
            name:"all_authors",
            title:"All authors",
            type: 'string',
        },
      {
        name: 'conference_image',
        title: 'Conference Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: 'paper_name',
        subtitle : 'all_authors',
        media: 'conference_image',
      },
    },
  }
  