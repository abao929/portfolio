const PROJECT_DATA: Project[] = [
  {
    title: 'Lucidity',
    month: 'May',
    year: '2022',
    time: '1 month',
    url: 'lucidity',
    link: 'https://sombersheep77.github.io/ivrogne/',
    img: 'lucidity_thumbnail.png',
    desc: 'spotify wrapped but for texts',
    content: [
      { header: '', body: '', imgs: [['lucidity.png']] },
      {
        header: 'Purpose',
        body: 'The goal of this project is to take a user’s text messaging data, analyze it, and present them with an interactive page that details metrics and information surrounding their texting habits. For instance, we may examine how frequently an individual uses emojis, their most frequently discussed topics, the user’s personality, etc. We plan to use a combination of statistical analysis, machine learning, and frontend design to create a compelling user experience.',
      },

      {
        header: 'About the Project',
        body: "We created a deep learning model for sentiment analysis in order to determine a user's texting personality. Additionally our model used word vectorization to find a celebrity who texted in similar ways to you. This backend was done in python.\n\n The frontend was built out using React with Typescript. Not much to say since it is far less complex than the backend that does all the analysis.\n\n You can visit the full version here at [REDACTED]",
      },
    ],
  },
  {
    title: 'Personas',
    month: 'September',
    year: '2022',
    time: '2 weeks',
    url: 'personas',
    link: 'https://sombersheep77.github.io/uiux-project-1/',
    img: 'personas.png',
    desc: 'observations about the CIT elevator',
    content: [
      {
        header: 'The Interface',
        body: "While the average user will have no trouble getting to their destination, there exist some extreme edge cases when using this elevator. The CIT elevator has a pretty simple interface, no different than your average elevator. However, the one major quirk is the addition of swiping. During the day, up until around 6pm, all floors are accessible without swiping. After 6 or so, floors 3-5 require a swipe which only professors, grad students, and ta's have. Despite coming daily to this god forsaken building, I have no idea at exactly what time the access shuts off, but for the sake of this project, we can just say 6pm. \n\nPrimary issue: only certain people have access, but the accessibility rules are unclear",
      },
      {
        header: 'Three Observations',
        body: 'Students did not know about the swipe access rules. \nStudents found the swiping mechanism confusing \nStudents were frustrated by the elevator moving differently than expected',
      },
      {
        header: 'Two Personas',
        body: 'the aforementioned unlucky visitors',
        imgs: [['persona_1.png', 'persona_2.png']],
      },
      {
        header: 'One Storyboard',
        body: "swipeless sally's stressful story",
        imgs: [
          [
            'storyboard/panel_1.png',
            'storyboard/panel_2.png',
            'storyboard/panel_3.png',
            'storyboard/panel_4.png',
            'storyboard/panel_5.png',
            'storyboard/panel_6.png',
            'storyboard/panel_7.png',
          ],
        ],
      },
    ],
  },
  {
    title: 'Responsive Redesign',
    month: 'October',
    year: '2022',
    time: '2 weeks',
    url: 'redesign',
    link: 'https://sombersheep77.github.io/uiux-project-2/',
    img: 'redesign.png',
    desc: "responsive redesign of 99 ranch market's site",
    content: [
      {
        header: 'Redesign',
        body: 'You can visit the redesign here at [REDACTED]',
      },
      {
        header: 'Usability Problems',
        body: 'As for accessibility, the site did pretty well according to WebAIM, though it seemed like the website did not get scraped properly. There was only 1 error according to WebAIM. The site used aria labels and alt text for all images. The color contrast was also good, so I stuck with a similar color scheme.',
        imgs: [['issues.png']],
      },
      {
        header: 'Research',
        body: "Takeaways:\nAmazon's emphasis on price integer\nAmazon's price per unit\nTarget's two banners, with the sticky search bar\nTarget's usage of chips over large block of categories on left\nTarget's add to cart button to make purchasing faster\nTarget's locate store button since 99 Ranch Market is primarily brick and mortar",
        imgs: [['target.png', 'amazon.png']],
      },
      {
        header: 'LoFi Wireframes',
        body: '',
        imgs: [['lofi_desktop.png'], ['lofi_tablet.png', 'lofi_phone.png']],
      },
      {
        header: 'HiFi Prototypes',
        body: '',
        imgs: [
          ['components.png'],
          ['hifi_desktop.png'],
          ['hifi_tablet.png', 'hifi_phone.png'],
        ],
      },
    ],
  },
  {
    title: 'Development',
    month: 'November',
    year: '2022',
    time: '3 weeks',
    url: 'ivrogne',
    link: 'https://sombersheep77.github.io/ivrogne/',
    img: 'ivrogne_thumbnail.png',
    desc: 'website to find cocktail recipes and the necessary ingredients to make your favorite drinks.',
    content: [
      { header: '', body: '', imgs: [['ivrogne.png']] },
      {
        header: 'Inspiration & Goal',
        body: "I don't drink alcohol, but simply chose this theme because the first api that popped up when looking for free apis was a cocktail database, and I thought all the data and images would make for a good set of item cards.\n\nYou can filter the drinks by whether or not it is alcoholic as well as using a list of ingredients that a cocktail contains. Additionally, you can sort the filtered data alphabetically or by number of ingredients.\n\nYou can also favorite a drink and the site will show all the necessary ingredients to make all your favorite drinks",
      },
      {
        header: 'Components',
        body: "Main contains all the filter, sort, and pagination related logic.\n\ndata/drinks.ts and data/types.ts contains the cleaned data downloaded from the api. Constants.tsx just exports all the constants used by Main\n\nI created two components, Drink, and Dropdown. The Drink component displays each drink's card. There are two variations of the Dropdown component, one that allows for only 1 selection, and one that allows for multiple, the former used for sorting, and the latter for filtering. While those are technically the only two React components, the site also uses buttons used for pagination, which could have been abstracted to be a separate components.",
      },
      {
        header: 'Layout & Hierarchy Considerations',
        body: 'I created dropdown menus since there are a lot of different sort and filter options. While sort and the alcoholic radio buttons both have 4 options and are mutually exclusive, I opted to make sort a dropdown since I see sort dropdowns a lot online and followed convention. Additionally, having the radio buttons for alcoholic options broke up the flow of the menu and looked better than having many dropdown menus. I chose to make the alcohol type filter and ingredients list both dropdowns since the former contains 13 types and the latter could exceed hundreds.\n\nI decided it was necessary to paginate the results since having all 500+ drinks on one page made for a rough browsing experience. I chose to cap it at 20 after playing around for a bit and feeling like it was similar in height to sites like google that also paginate results. Additionally 20 allows for some amount of scrolling without bringing one too far away from the sort menu. I opted to not make the side menu sticky as it interfered with the dropdown menu scrolling experience.',
      },
    ],
  },
]

export { PROJECT_DATA }
