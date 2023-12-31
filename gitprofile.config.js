// gitprofile.config.js

const config = {
  github: {
    username: 'TheSoulounias', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['TheSoulounias','git_test','odin-recipes'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'themelis-soulounias',
    //twitter: 'arif_szn',
   // mastodon: 'arifszn@mastodon.social',
   // facebook: '',
   // instagram: '',
   // youtube: '', // example: 'pewdiepie'
   // dribbble: '',
   // behance: '',
   // medium: 'arifszn',
   // dev: 'arifszn',
   // stackoverflow: '', // example: '1/jeff-atwood'
   // skype: '',
   // telegram: '',
   // website: 'https://arifszn.com',
   // phone: '',
    email: 'TheSoulounias@gmail.com',
  },
  resume: {
    fileUrl:
'', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Excel',
    'SQL',
    'Python',
    'Linux',
    'Microsoft PowerApps',
    'R Programming',
    'Git',
    'Pandas',
    
  ],
  experiences: [
    {
      company: 'Certified Ceramics',
      position: 'Business and Marketing Analyst',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://certifiedceramics.com',
    },
    {
      company: 'Skanska',
      position: 'EHS Manager',
      from: 'March 2023',
      to: 'October 2023',
      companyLink: 'https://skanska.com',
    },
    {
      company: 'Delaware River Port Authority',
      position: 'Safety Specialist',
      from: 'September 2019',
      to: 'March 2023',
      companyLink: 'https://drpa.org',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'College of Arts and Sciences, University of South Florida',
      degree: 'Bachelor of Science, Chemistry',
    //  from: '2015',
   //   to: '2019',
    },
    {
      institution: 'College of Arts and Sciences, Saint Petersburg College',
      degree: 'Associate of Science, Biomedical',
    //  from: '2012',
    //  to: '2014',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'NBA Stat Scrape and Analysis',
      description:
        'Ongoing project to scrape and analyze leader stats from the NBA website.',
      imageUrl: 'https://github.com/TheSoulounias/TheSoulounias/blob/5a02b1fc4bc2ac386a305397a98f7e11ac9ee373/firefox_Qzp1xxVxvK.png?raw=true',
      link: 'https://www.kaggle.com/code/themelissoulounias/nba-stat-scrape-and-analysis',
    },
    {
      title: 'Revenue Map',
      description:
        'A short tutorial on placing data on a map. To help decision makers visualize areas for ad targeting',
      imageUrl: 'https://github.com/TheSoulounias/TheSoulounias/blob/ab380cb07338a415db36793373d996f87c43e6b5/firefox_H55SYMnpi0.png?raw=true',
      link: 'https://www.kaggle.com/themelissoulounias/revenue-map',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
//  blog: {
 //   source: 'dev', // medium | dev
//    username: 'arifszn', // to hide blog section, keep it empty
//    limit: 2, // How many posts to display. Max is 10.
//  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
 // footer: `Made with <a 
 //     class="text-primary" href="https://github.com/arifszn/gitprofile"
 //     target="_blank"
 //     rel="noreferrer"
 //   >GitProfile</a> and â¤ï¸`,
};

export default config;
