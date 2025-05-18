// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'TheSoulounias', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['TheSoulounias','git_test','odin-recipes','javascript-exercises','rock-paper-scissors','odin-landing-page-project','css-exercises'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
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
    'Data Analysis',
    'R Programming',
    'Git',
    'Pandas',
    
  ],
  experiences: [
    {
      company: 'David Nelson Construction Co',
      position: 'Safety Director',
      from: 'October 2024',
      to: 'Present',
      companyLink: 'https://nelson-construction.com',
    },
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
    {
      company: 'ABKaelin, LLC',
      position: 'Environmental Health Safety Specialist',
      from: 'March 2018',
      to: 'September 2019',
      companyLink: 'https://www.abkaelin.com/',
    },
    {
      company: 'Dr. Ma\'s Materials Research Group, University of South Florida',
      position: 'Undergraduate Researcher',
      from: 'January 2015',
      to: 'January 2016',
      companyLink: 'https://www.usf.edu/research/',
    },
    {
      company: 'Corcon Inc.',
      position: 'Safety Officer',
      from: 'July 2011',
      to: 'November 2016',
      companyLink: 'https://drpa.org',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ], */
  education: [
    {
      institution: 'College of Arts and Sciences, University of South Florida',
      degree: 'Bachelor of Science, Chemistry',
      from: '----', //from: '2015',
      to: '----', // to: '2019',
    },
    {
      institution: 'College of Arts and Sciences, Saint Petersburg College',
      degree: 'Associate of Science, Biomedical',
      from: '----', // from: '2012',
      to: '----', // to: '2014',
    },
  ],

 /* publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ], */
  // Display articles from your medium or dev account. (Optional)
 // blog: {
  //  source: 'dev', // medium | dev
 //   username: 'arifszn', // to hide blog section, keep it empty
 //   limit: 2, // How many articles to display. Max is 10.
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
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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
/*  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
*/
  enablePWA: true,
};

export default CONFIG;
