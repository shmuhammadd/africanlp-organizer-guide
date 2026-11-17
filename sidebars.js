// @ts-check

// Numeric prefixes (01-) are stripped from doc IDs, so chapters/01-about.md is chapters/about.
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guide: [
    'index',
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: ['chapters/about', 'chapters/timeline'],
    },
    {
      type: 'category',
      label: 'Proposal and set-up',
      collapsed: false,
      items: ['chapters/proposal', 'chapters/team', 'chapters/infrastructure', 'chapters/host-chairs', 'chapters/speakers', 'chapters/sponsorship'],
    },
    {
      type: 'category',
      label: 'Submissions and reviewing',
      collapsed: false,
      items: ['chapters/call-for-papers', 'chapters/openreview', 'chapters/arr-commitments', 'chapters/reviewing-and-decisions'],
    },
    {
      type: 'category',
      label: 'From acceptance to the workshop',
      collapsed: false,
      items: ['chapters/author-logistics', 'chapters/proceedings', 'chapters/programme', 'chapters/workshop-day'],
    },
    'chapters/lessons-learned',
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
