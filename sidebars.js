// @ts-check

// Numeric prefixes (01-) are stripped from doc IDs, so chapters/01-about.md is chapters/about.
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guide: [
    'index',
    {
      type: 'category',
      label: 'Before the call',
      collapsed: false,
      items: ['chapters/about', 'chapters/timeline', 'chapters/proposal', 'chapters/team', 'chapters/infrastructure', 'chapters/host-chairs'],
    },
    {
      type: 'category',
      label: 'Papers and reviewing',
      collapsed: false,
      items: ['chapters/call-for-papers', 'chapters/openreview', 'chapters/arr-commitments', 'chapters/reviewing-and-decisions'],
    },
    {
      type: 'category',
      label: 'Programme and money',
      collapsed: false,
      items: ['chapters/speakers', 'chapters/programme', 'chapters/sponsorship'],
    },
    {
      type: 'category',
      label: 'After acceptance',
      collapsed: false,
      items: ['chapters/proceedings', 'chapters/author-logistics', 'chapters/workshop-day', 'chapters/lessons-learned'],
    },
    {
      type: 'category',
      label: 'Templates',
      collapsed: true,
      link: {type: 'doc', id: 'templates/index'},
      items: [
        'templates/cfp-email',
        'templates/speaker-invitation',
        'templates/accepted-authors',
        'templates/oral-presenters',
        'templates/registration-reminder',
        'templates/sponsorship-request',
      ],
    },
  ],
};

export default sidebars;
