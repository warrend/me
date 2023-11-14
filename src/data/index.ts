import {
  githubIcon,
  linkedinIcon,
  codepenIcon,
  cwPodcastLogo,
  ludIcon,
  varbqLogo,
} from './images';

import {
  secondAveSubway,
  fourthNinth2,
  fourthAndNinthSubway,
  fifthAveAndGarfield,
  seventhAveParkAndSubway,
  seventhAveSubwayCar,
  seventhStreetEv,
  seventhTrain,
  eighthAveAndHudson,
  tenthAveA,
  tenthStreet,
  twelfthStreet,
  twentyFirstStLic,
  thirtyFourthStHaroldSq,
  chinatownSpeakeasy,
  christopherAndWashington,
  eBroadwayChinatown,
  houstonAndWooster,
  indigoCrowAbq,
  italy,
  lafayetteAndPrince,
  littleItaly,
  musicHall,
  orchardStreet,
  philly,
  rockvilleCentre,
  smithAndNinthSubway,
  smithStBk,
  unionAndBond,
  unionStBridge,
  whitney,
} from './art-images';

export const artData = [
  { title: 'Lafayette & Prince', image: lafayetteAndPrince },
  { title: '7th Ave Subway', image: seventhAveSubwayCar },
  { title: '4th & 9th St.', image: fourthNinth2 },
  { title: '5th Ave & Garfield', image: fifthAveAndGarfield },
  { title: '34th St & Harold Sq', image: thirtyFourthStHaroldSq },
  { title: '21st St, LIC', image: twentyFirstStLic },
  { title: '7 Train', image: seventhTrain },
  { title: '7th Street, East Village', image: seventhStreetEv },
  { title: 'E Broadway Chinatown', image: eBroadwayChinatown },
  { title: 'Orchard Street', image: orchardStreet },
  { title: '7th Ave, Park Slope', image: seventhAveParkAndSubway },
  { title: 'Christopher & Washington', image: christopherAndWashington },
  { title: 'Chinatown Speakeasy', image: chinatownSpeakeasy },
  { title: '8th Ave & Hudson', image: eighthAveAndHudson },
  { title: 'Whitney Museum', image: whitney },
  { title: '10th St. & Ave A', image: tenthAveA },
  { title: '10th Street', image: tenthStreet },
  { title: '12th Street', image: twelfthStreet },
  { title: 'Smith St, Brooklyn', image: smithStBk },
  { title: 'Houston & Wooster', image: houstonAndWooster },
  { title: 'Union St Bridge', image: unionStBridge },
  { title: 'Indigo Crow, NM', image: indigoCrowAbq },
  { title: 'Italy', image: italy },
  { title: 'Little Italy, NYC', image: littleItaly },
  { title: 'Webster Hall', image: musicHall },
  { title: 'Philadelphia', image: philly },
  { title: 'Rockville Centre', image: rockvilleCentre },
  { title: 'Smith & 9th St', image: smithAndNinthSubway },
  { title: '2nd Ave', image: secondAveSubway },
  { title: '4th & 9th St', image: fourthAndNinthSubway },
  { title: 'Union & Bond', image: unionAndBond },
];

export const portfolioData = {
  name: 'Daniel Warren',
  intro:
    'Reading a coding resume is boring so I added my artwork to liven up the place. Minimize this window to see better. Then when you’re done, you can come back here and look at my credentials.',
  about:
    'As a software engineer, I use an array of technical and creative skills to efficiently solve problems. Before coding, I designed hand painted wallpaper, worked in sales, and did copywriting for television.',
  social: [
    {
      icon: githubIcon,
      link: 'https://github.com/warrend',
    },
    { icon: codepenIcon, link: 'https://codepen.io/danielwarren' },
    { icon: linkedinIcon, link: 'https://www.linkedin.com/in/warrendl' },
  ],
  projects: [
    {
      name: 'Lud App',
      logo: ludIcon,
      description:
        'A tech fasting app to free yourself from the daily digital grind.',
      github: 'https://github.com/warrend/dfast',
      demo: null,
    },
    {
      name: 'Varbq',
      logo: varbqLogo,
      description:
        'A utility package for generating CSS and JS variable files based on a theme configuration.',
      github: 'https://github.com/warrend/varbq',
      demo: null,
    },
    {
      name: 'Ninety-Nine Times',
      logo: null,
      description:
        'An infographic application of my grandfather’s world travels. All in all, he traveled to 99 different countries on 48 ships during his life.',
      github: 'https://github.com/warrend/ninety-nine',
      demo: 'https://warrend.github.io/ninety-nine/',
    },
    {
      name: "My Mom's Beatles",
      logo: null,
      description:
        'My mom collected just about every Beatles article she could get her hands on in the 1960s. These are some highlights from the collection.',
      github: 'https://github.com/warrend/mmb',
      demo: 'https://warrend.github.io/mmb',
    },
  ],
  publications: [
    {
      name: 'Painting with CSS',
      author: 'Daniel Warren',
      publication: 'LogRocket',
      link: 'https://blog.logrocket.com/painting-with-css-644cd4e67fad/',
      date: 'January 18, 2019',
    },
    {
      name: 'A Tutorial on Creating Coding Tutorials',
      author: 'Daniel Warren',
      publication: 'LogRocket',
      link: 'https://blog.logrocket.com/a-tutorial-on-creating-front-end-tutorials-2b13d8e94df9/',
      date: 'April 17, 2018',
    },
    {
      name: "My Grandfather's Travel Logs and Other Repetitive Tasks",
      author: 'Daniel Warren',
      publication: 'A List Apart',
      link: 'https://alistapart.com/article/my-grandfathers-travel-logs-and-other-repetitive-tasks/',
      date: 'December 14, 2017',
    },
  ],
  podcasts: [
    {
      name: 'Console.Warren() Podcast',
      author: 'Daniel Warren',
      publication: 'Substack, Apple Podcasts, Spotify',
      links: [
        { name: 'Substack', link: 'https://consolewarren.substack.com/' },
        {
          name: 'Spotify',
          link: 'https://open.spotify.com/show/2YqFHL7BPU9rE2ZgPnIoWi?si=a1cd63ec1dea472a',
        },
        {
          name: 'Apple',
          link: 'https://podcasts.apple.com/us/podcast/console-warren-podcast/id1706675213?i=1000628655847',
        },
      ],
      image: cwPodcastLogo,
      description:
        'A podcast highlighting what is new and noteworthy in software development.',
    },
  ],
} as const;
